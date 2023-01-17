import React, { useState,useRef,useCallback,useEffect } from 'react'
import swal from 'sweetalert2'
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { handlePostState } from "../atoms/postAtom";
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'


import {

Close,Check,  ExpandLess, ExpandMore, InsertPhoto,Videocam

} from '@mui/icons-material'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })
  
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    
  ]
function Form() {
    const [rich, setRich] = useState('');
    console.log(rich,"hey pah")
  const router = useRouter()
//   const { data: session } = useSession();
  // data from select field

  const [category, setCategory] = useState("")

  const changecategory = (newSelect) => {
  setCategory(newSelect)
  }

  const [handlePost, setHandlePost] = useRecoilState(handlePostState);

// error handler
const [tags ,setTags]=useState(false)
const choseImg=()=>{
document.getElementById('btnImg').click()
setVideoImg(true)
setState(false)
document.getElementById('confirm').style.opacity="1"

}
// Trial upload onClick



const closeItems=()=>{
setState(true)
document.getElementById('video').style.pointerEvents="initial"
document.getElementById('photo').style.pointerEvents="initial"
// setBaseImage("")
setImage('')
setVid('')
}

const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");
const uploadImage = () => {
let timerInterval
swal.fire({
title: 'Please Wait!',
html: 'Loading... <b></b> milliseconds.',
timer: 10000,
timerProgressBar: true,
didOpen: () => {
swal.showLoading()
const b = swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
b.textContent = swal.getTimerLeft()
}, 100)
},
willClose: () => {
clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})
const data = new FormData()
data.append("file", image)
data.append("upload_preset", "obs8xuzh")
data.append("cloud_name","thefinder")
fetch(" https://api.cloudinary.com/v1_1/thefinder/image/upload",{
method:"post",
body: data, 
mode:'cors'
})
.then(resp => resp.json())
.then(data => {
setUrl(data.secure_url)
console.log(data.secure_url)
document.getElementById('confirm').style.opacity="0"
document.getElementById('prev').style.opacity="1"
swal.fire( 'Good job!', 'Image uploaded successfully!', 'success' )
})
.catch((err) =>{ 

swal.fire({ icon: 'error', 
title: 'Oops...', text: 'Something went wrong!',
})
closeItems()
}
)

}
// CLOUDINARY

const [vid, setVid ] = useState("");
const [ urlVid, setUrlVid ] = useState("");
const uploadVid = () => {
let timerInterval
swal.fire({
title: 'Please Wait !',
html: 'Loading... <b></b> milliseconds.',
timer: 10000,
timerProgressBar: true,
didOpen: () => {
swal.showLoading()
const b = swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
  b.textContent = swal.getTimerLeft()
}, 100)
},
willClose: () => {
clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
if (result.dismiss === swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})
const data = new FormData()
data.append("file", vid)
data.append("upload_preset", "obs8xuzh")
data.append("cloud_name","thefinder")
fetch(" https://api.cloudinary.com/v1_1/thefinder/video/upload",{
method:"post",
body: data,
mode:'cors'
})
.then(resp => resp.json())
.then(data => {
document.getElementById('confirm').style.opacity="0"
document.getElementById('prevvideo').style.opacity="1"
setUrlVid(data.secure_url)
console.log(data.secure_url)
swal.fire( 'Good job!', 'Video uploaded successfully', 'success' )

}).catch((err) =>{ 

swal.fire({ icon: 'error', 
title: 'Oops...', text: 'Something went wrong!',
})
closeItems()
}

)
}
//function


const [videos,setVideo]=useState([])

const [videoImg ,setVideoImg]=useState(true)
const [isVideoplaying, setisVideoplaying]=useState(false)
const [state ,setState]=useState(true)
const Videoref=useRef(null)
const Playvideo=()=>{
if(isVideoplaying){
//stop
Videoref.current.pause()
setisVideoplaying(false)

}else{
//play
Videoref.current.play()
setisVideoplaying(true)

}

}




const chosevideo=()=>{
document.getElementById('btnvideo').click()
setVideoImg(false)
setState(false)
document.getElementById('confirm').style.opacity="1"
}





const handleEmtyInput=({target})=>{
setUrl('')
setUrlVid('')

const files=target.files
target.value=''
}

const Tagss=()=>{
if (tags){
setTags(false)


}
else{
setTags(true)
}
}
// submit

// CLOUDINARY



const [postData, setPostData] = useState({   provider:'',
content:'',
storelogo_link:'',
tags:'',
image:'',
price:'',
comments:[],
likes:[],
fav:[],
video:'',
name:"",
category:"",
img_link:"",
createdAt:"",
video_link:'',
store_link:'',});

const clear = () => {
setPostData({   userImg:'',

tags:'',
image:'',
video:'',
name:"",
img_link:"",
createdAt:"",
video_link:'',
store_link:'',
price:'',});
};


// SUBMIT DATA
const handleSubmit = async (e) => {
e.preventDefault();
// image restriction

const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
     ...postData,
    image:url,
    content:rich,
    video:urlVid,
    category:category, 
    createdAt: new Date().toString(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();
  console.log(responseData);

  setHandlePost(true);
 
};





const uploadPrev=()=>{

const oFreader=new  FileReader()
oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
oFreader.onload=function(oFREvent){
document.getElementById("prev").src=oFREvent.target.result;
console.log(oFREvent.target.result)
document.getElementById('photo').style.pointerEvents="none"
document.getElementById('photo').style.opacity="0.9"
setImage(oFREvent.target.result)

}
}

// video states
const [VideoData, setVideoData] = useState({   provider:'',
title:'',
message:'',
tags:'',
image:'',
date:'',
video:'',
accountType:'',
description:'',});
const uploadprevvideo=()=>{
const ofFreader=new  FileReader()
ofFreader.readAsDataURL(document.getElementById('btnvideo').files[0]);
ofFreader.onload=function(ofFREvent){
document.getElementById("prevvideo").src=ofFREvent.target.result;
console.log(ofFREvent.target.result)
document.getElementById('video').style.pointerEvents="none"
document.getElementById('video').style.opacity="0.9"
console.log(ofFREvent.target.result,"video")
setPostData({...postData, video:ofFREvent.target.result})
setVideo(ofFREvent.target.result)
setVid(ofFREvent.target.result)


}
}
// getvideos to faunadb 


// onclick function
function HandleDeatailsChange(event) {
console.log(event.target.value)
setVideo(event.target.value)

}

return (

<div className="main__post">
{/* <p onClick={SubmitData}>TRIAL VIDEO:</p> */}
<form    onSubmit={handleSubmit}  >
<div className="main__posthead">
<Close onClick={() => router.push('/')}/>
<button   type="submit">hook</button>
</div>
<div className="profileImgItems">
<div className="profileImg">
{/* select field */}
<select  onChange={(event) => changecategory(event.target.value)}
value={category}>
<option value={""}>Post category</option>
<option value="iphone">iphone</option>
<option value="computer">computer</option>
<option value="phone">phone</option>
<option value="accessories">accessories</option>
<option value="tv">tv</option>
<option value="audio">audio</option>
<option value="apps">apps</option>
<option value="education"> education</option>
<option value="food">wamfie</option>
<option value="health">health</option>
<option value="brands">brands</option>
<option value="vehicle">vehicle</option>
<option value="science">science</option>
<option value="travel">travel</option>
<option value="mobile">mobile</option>
<option value="laptops">laptops</option>
<option value="tablets">tablets</option>
<option value="smartwatches">smartwatches</option>
<option value="headset">headset</option>
<option value="cammera">cammera</option>
<option value="games">games</option>
<option value="speakers">speakers</option>
<option value="appliances">appliances</option>
<option value="collers">collers</option>
<option value="cars">cars</option>
<option value="applesumsung">apple and sumsung</option>
<option value="applenews">apple news</option>
<option value="sumsung">sumsung</option>
<option value="apple">apple</option>
<option value="realme">realme</option>
<option value="google">google</option>
<option value="huawei">huawei</option>
<option value="mi">mi</option>
<option value="oneplus">oneplus</option>
<option value="oppo">oppo</option>
<option value="infinix">infinix</option>
<option value="vivo">vivo</option>
<option value="sonny">sonny</option>
<option value="nokia">nokia</option>

</select>


</div>
<div className="tags">
<p>Tags</p>
{tags?(<ExpandLess onClick={Tagss}/>):(<ExpandMore onClick={Tagss}/>)}
{tags?(<div className="tags__elements">

<input type="radio" id="Local" name="gender" value="recent"
onChange={(e)=>setPostData({...postData, tags:e.target.value})}
/>
<label htmlFor="Local">recent </label><br/>
<input type="radio" id="male" name="gender" value="news"
onChange={(e)=>setPostData({...postData, tags:e.target.value})}
/>
<label htmlFor="male">news</label><br/>
<input type="radio" id="male" name="gender" value="trending"
onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
<label htmlFor="male">trending</label><br/>
<input type="radio" id="male" name="gender" value="video"
onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
<label htmlFor="male">video</label><br/>
<input type="radio" id="male" name="gender" value="review"
onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
<label htmlFor="male">review</label><br/>
<input type="radio" id="male" name="gender" value="topstories"
onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
<label htmlFor="male">top stories</label><br/>
<input type="radio" id="male" name="gender" value="products"
onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
<label htmlFor="male">products</label><br/>
<input type="radio" id="male" name="gender" value="store"
onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
<label htmlFor="male">store</label><br/>
</div>
):""
}
</div>
</div>
<div className="title__textArea">
{/* <textarea name="creator" id="input" placeholder="share your opinions ..." value={postData.title}
onChange={(e)=>setPostData({...postData, title:e.target.value})}
required
/> */}
<div className='otherinputs'>
<input required type="text" placeholder="publisher name"value={postData.name}
onChange={(e)=>setPostData({...postData,   name:e.target.value})}/>
<input required type="text" placeholder="price"value={postData.price}
onChange={(e)=>setPostData({...postData,   price:e.target.value})}/>
<input required type="url" placeholder="https://imageurl"value={postData.img_link}
onChange={(e)=>setPostData({...postData,   img_link:e.target.value})}/>
<input required type="url" placeholder="https://videourl"value={postData.video_link}
onChange={(e)=>setPostData({...postData,   video_link:e.target.value})}/>
<input required type="url" placeholder="https://storeurl"value={postData.store_link}
onChange={(e)=>setPostData({...postData,   store_link:e.target.value})}/>
<input required type="url" placeholder="https://store logo url"value={postData.storelogo_link}
onChange={(e)=>setPostData({...postData,   storelogo_link:e.target.value})}/>
</div>
{/* rich text editor */}

<QuillNoSSRWrapper modules={modules} formats={formats} placeholder="describe your post"onChange={setRich} value={rich} theme="snow" />

{/* end of editor */}



</div>
<div className="media___section">
{/* {state?"kksd":( <p onClick={uploadImage}>Confirm image</p>)} */}
{state?(<p id="default"></p>):(
<div id="imgSection" className="media___sectionImageSelected">
{videoImg?(<img accept="image/*" id="prev"/>   ):(
<video  onClick={Playvideo} ref={Videoref}  id="prevvideo" accept="video/*"/> )}

<Close onClick={closeItems} className="closeup"/>

{/* {videoImg?(<Crop  className="crop"/>):(<p>hello</p>)} */}

</div>
)
}

<input type="file"id="btnImg"  onClick={handleEmtyInput} onChange={uploadPrev} accept="image/*" ></input>
<input onChange={uploadprevvideo} onClick={handleEmtyInput} accept="video/* " type="file" id="btnvideo"/> 
<div className="media___sectionImageOption">

<InsertPhoto id="photo"  onClick={choseImg}/>
<Videocam id="video" onClick={chosevideo}/>
<a target="_self" href="https://forecastmall.com"><img src="https://lh6.googleusercontent.com/-7_kmLfjMX0w/AAAAAAAAAAI/AAAAAAAAAAA/ZnOCWZoPC90/s60-c-k-mo/photo.jpg"/></a>
<a target="_self" href="https://forecastmall.com"><img src="https://assets.swappie.com/iphone11provihreaCC88.jpg"/></a>
<a target="_self" href="https://forecastmall.com"><img src="https://i1.wp.com/www.euroscientist.com/wp-content/uploads/2020/04/chelsea-WvusC5M-TM8-unsplash-scaled.jpg?fit=2560%2C1920&ssl=1"/></a>
<a target="_self" href="https://forecastmall.com"><img src="https://cdn2.vectorstock.com/i/1000x1000/73/31/black-and-red-business-card-template-vector-14297331.jpg"/></a>
</div>
</div>
<div className="confirm" id="confirm">
{image?(<p id="acceptImg" onClick={uploadImage}>Upload <Check/></p>):""}
{vid?(<p id="acceptVid" onClick={uploadVid}>Upload <Check/></p>):""}
</div>
</form>
</div>
)
}
export default Form


