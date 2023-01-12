import Head from 'next/head'
import Appbar from '../../components/appbar/Appbar'
import ListCard from '../../components/Cards/listCard/ListCard'
import HeadlineCard from '../../components/head/headCard'
import ListRoute from '../../components/route/ListRoute'
import Search from '../../components/search/Search'
import VideoCard from '../../components/Cards/listCard/videoCard'
function Home() {
  return (
    <div className='home'>
      <Head>Trending products on amazon</Head>  
  <div>
      
    <Appbar/>
    <Search/>
    <div className='headflex'>
    <HeadlineCard
    image="https://m.media-amazon.com/images/I/61Bw7oNnYCL._AC_UY218_.jpg"
    />
       <HeadlineCard
    image="https://m.media-amazon.com/images/I/7189iXimfWL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
    />
       <HeadlineCard
    image="https://m.media-amazon.com/images/I/31X0I2w1KxL._AC_UL320_.jpg"
    />
       <HeadlineCard
    image="https://images.macrumors.com/t/62vjVRKy2CKVEE8l08AhzS04C3I=/800x0/smart/article-new/2022/01/iPhone-14-Mock-pill-and-hole-thumb.jpg?lossy"
    />
  </div>
   
    <ListRoute/>
   <div className='home_center' >
   <div className='home_list' >
      <p>Top Stories >></p>
<ListCard
content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRyndmlRtGCgq2lnd32z0OgTVIQnmLLsUzw&usqp=CAU"
/>
<ListCard
content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
/>
<ListCard
content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
img="https://m.media-amazon.com/images/I/7189iXimfWL._AC_SY200_.jpg"
/>
<ListCard
content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
/>

</div>
<div className='home_list'>
   <p>videos >></p>
   <div className='videodisp'>
<VideoCard/>
<VideoCard/>
<VideoCard/>
<VideoCard/>
</div>
</div>
<div className='home_list'>
   <p>apple home >></p>
   <ListCard
content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
img="https://m.media-amazon.com/images/I/7189iXimfWL._AC_SY200_.jpg"
/>
<ListCard
content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
/>
</div>
   </div>
</div>      
        
</div>
  )
}

export default Home