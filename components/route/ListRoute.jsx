import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
function ListRoute() {
    const router = useRouter();
  return (
    <div className='listroute'>
    <div className='list'>
 
 <Link href="/">
<a className={router.pathname == "/" ? "active" : "notActive"}>
Home
  </a>
  </Link>   
</div>    
<div className='list'>
 
    <Link href="/news">
 <a className={router.pathname == "/news" ? "active" : "notActive"}>
   News
     </a>
     </Link>   
</div>
<div className='list'>
 <Link href="/trends">
<a className={router.pathname == "/trends" ? "active" : "notActive"}>
Trending
  </a>
  </Link>   
</div>
    
<div className='list'>
 <Link href="/video">
<a className={router.pathname == "/video" ? "active" : "notActive"}>
Video
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/review">
<a className={router.pathname == "/review" ? "active" : "notActive"}>
Review
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/iphone">
<a className={router.pathname == "/iphone" ? "active" : "notActive"}>
Iphone
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/computers">
<a className={router.pathname == "/computers" ? "active" : "notActive"}>
Computer
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/phones">
<a className={router.pathname == "/phones" ? "active" : "notActive"}>
Phones
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/acessories">
<a className={router.pathname == "/acessories" ? "active" : "notActive"}>
Acessories
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/tv">
<a className={router.pathname == "/tv" ? "active" : "notActive"}>
Tv
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/audio">
<a className={router.pathname == "/audio" ? "active" : "notActive"}>
Audio
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/apps">
<a className={router.pathname == "/apps" ? "active" : "notActive"}>
Apps
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/education">
<a className={router.pathname == "/education" ? "active" : "notActive"}>
Education
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/food">
<a className={router.pathname == "/food" ? "active" : "notActive"}>
Food
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/health">
<a className={router.pathname == "/health" ? "active" : "notActive"}>
Health
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/brands">
<a className={router.pathname == "/brands" ? "active" : "notActive"}>
Brands
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/vehicle">
<a className={router.pathname == "/vehicle" ? "active" : "notActive"}>
Vehicle
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/science">
<a className={router.pathname == "/science" ? "active" : "notActive"}>
Science
  </a>
  </Link>   
</div>
<div className='list'>
 <Link href="/travel">
<a className={router.pathname == "/travel" ? "active" : "notActive"}>
Travel
  </a>
  </Link>   
</div>
    </div>
  )
}

export default ListRoute