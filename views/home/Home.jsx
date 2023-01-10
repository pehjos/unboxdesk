import Head from 'next/head'
import Appbar from '../../components/appbar/Appbar'
import HeadlineCard from '../../components/head/headCard'
import ListRoute from '../../components/route/ListRoute'
import Search from '../../components/search/Search'
function Home() {
  return (
    <div>
      <Head>Trending products on amazon</Head>  
  <div>
      
    <Appbar/>

    <HeadlineCard
    image="https://images.macrumors.com/t/62vjVRKy2CKVEE8l08AhzS04C3I=/800x0/smart/article-new/2022/01/iPhone-14-Mock-pill-and-hole-thumb.jpg?lossy"
    />
  
    <Search/>
    <ListRoute/>
</div>      
        
</div>
  )
}

export default Home