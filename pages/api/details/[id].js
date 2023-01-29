import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      // check if the id is a valid ObjectId
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Invalid post id' });
        return;
      }

      const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
      
      if (!post) {
        res.status(404).json({ message: 'Post not found' });
        return;
      }
      
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }




  if (method === "DELETE") {
    try {
      await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ message: "The post has been deleted!!" });
    } catch (error) {
      res.status(500).json(error);
    }
  }




  if (method === "POST") {
    try {
      await db.collection("posts").findOneAndUpdate({ _id: new ObjectId(id) },
      {
     $pull:{likeId:req.body }
      });
      res.status(200).json({ message: "The post has been deleted!!" });
    
    
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
   
    try {
      const post = await db
        .collection("posts")
        .findOneAndUpdate({ _id: new ObjectId(id) },{
$push:{
  likes:req.body
}

        });
 ;
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PATCH") {
   
    try {
      const post = await db
        .collection("posts")
        .findOneAndUpdate({ _id: new ObjectId(id) },{
$push:{
  likeId:req.body
}

        });
 ;
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
}
