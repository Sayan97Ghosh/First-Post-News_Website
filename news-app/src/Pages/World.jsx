import React,{ useState , useEffect } from 'react';
import './Pages.css';
import axios from "axios";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  FormControl,
  FormLabel,
  Input,
  Button,
  
 
} from '@chakra-ui/react';
import { VscLiveShare } from "react-icons/vsc";

import {ChevronRightIcon} from "@chakra-ui/icons"
import Carousel from '../Components/Carousel';
import AspectRatio from '../Components/AspectRatio';
import Pagination from '../Components/Pagination';
import MostRead from './MostRead';
  

function World() {
  const [userData,setUserData] = useState([]);
  const [page,setPage] = useState(1);
  useEffect((page=1)=>{
    async function getUser() {
      try {
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=05b440eb39b3baa3c7ec258947b17ec3&page=2&max=10&lang=en`);
      
        setUserData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  },[page])
 
console.log(userData);
  
  return (
    <>
      <div className="add">
        <img src="https://tpc.googlesyndication.com/simgad/14562289950417345224" alt="" />
      </div>
    <div className='main'>
      
       <div className='first-container'>
          {/* latest tag here */}
       <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Latest News</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>World News</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
        {/* first the slider part */}
        {/* second the axios part */}
      <div className="heading">
      <h1>WORLD NEWS</h1>
      <hr className='hr'/><span className='span'></span><hr className='hr'/>
      </div>
    {/* slider */}

    <Carousel/>
    
      {/* all news data append here */}
     
      {userData.map((ele)=>(
        <div key={ele.publishedAt}>
           
          <img src= {ele.image} alt="" />
           <div className='title'>
           <a href={ele.url}target="_blank">
            <p >India </p>
            <VscLiveShare/>
            </a>
            <span className='span1'></span>
            <h3 style={{fontWeight:"bolder"}}>{ele.title}</h3>
            <p>{ele.description}</p>
           </div>
           
           
        </div>
      ))}
      {/* pagination Append Here */}
        <Pagination 
        page = {page}
        setPage = {setPage}
        />
             <div style={{marginTop:"2%"}}>
             <h1>YOU MAY LIKE</h1>
            <hr />
             </div>
          
            <div className="recomendation">
              <div>
              <img class="ob-rec-image ob-show" loading="lazy" aria-hidden="true" src="https://images.outbrainimg.com/transform/v3/eyJpdSI6ImM4NjQxOTQ0MmRmNDA4YjVkMjc5Y2IwYmFkMGZhNzIwOTVmZThhYjdjYjEyMTYzMTMzZDU1OTliMDg3ZDE0NTgiLCJ3IjozNjAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp" onload="this.className+=' ob-show'" alt="Kolkata: The Prices for unsold SUVs might surprise you" title="Kolkata: The Prices for unsold SUVs might surprise you" onerror="OBR.extern.imageError(this)"/>
              <span class="ob-unit ob-rec-text" data-type="Title" title="Kolkata: The Prices for unsold SUVs might surprise you">Kolkata: The Prices for unsold SUVs might surprise you</span>
              </div>
            

{/* 2nd video */}
<div>
<img class="ob-rec-image ob-show" loading="lazy" aria-hidden="true" src="https://images.outbrainimg.com/transform/v3/eyJpdSI6ImFkZjExMzM2YWQwNThiNzE4NzFhMjU0OWJhNmNmM2M4NmYzNDczMTdiYjUxOWZlOGM5YzZmZGI5OTc5N2RkMTMiLCJ3IjozNjAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp" onload="this.className+=' ob-show'" alt="Try Not To Laugh At These Pets Sleeping Anywhere But Their Bed" title="Try Not To Laugh At These Pets Sleeping Anywhere But Their Bed" onerror="OBR.extern.imageError(this)"/>
<span class="ob-unit ob-rec-text" data-type="Title" title="Try Not To Laugh At These Pets Sleeping Anywhere But Their Bed">Try Not To Laugh At These Pets Sleeping Anywhere But Their Bed</span>
</div>


{/* 3rd video */}
<div>
<img class="ob-rec-image ob-show" loading="lazy" aria-hidden="true" src="https://images.outbrainimg.com/transform/v3/eyJpdSI6IjU0YzFiZDg0MWFhZjMwNDhkMThiM2I4NzczNDk5Nzk2NjI4ZTFmOTRmOTRhM2U5MzM1ZTJmNjZmZjhjMDNkNTMiLCJ3IjozNjAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp" onload="this.className+=' ob-show'" alt="[Pics] The Riskiest Dresses Ever Worn At The Country Music Awards" title="[Pics] The Riskiest Dresses Ever Worn At The Country Music Awards" onerror="OBR.extern.imageError(this)"/>
<span class="ob-unit ob-rec-text" data-type="Title" title="[Pics] The Riskiest Dresses Ever Worn At The Country Music Awards">[Pics] The Riskiest Dresses Ever Worn At The Country Music Awards</span>
</div>
  </div>
  <div className="add">
        <img src="https://tpc.googlesyndication.com/simgad/14562289950417345224" alt="" />
      </div>
        </div>

        {/* footer add */}
        {/* second containre */}
       <div className='second-container'>
               <img src="https://adimg-d01.news18.com/ibnlive/ad-img/Network18_Ads/Web_Ads/Roadblock/samsung/21sep22/300x250.gif" alt="" />
               <div style={{border:"2px solid gray",marginTop:"5%"}}>
                <h2 style={{fontWeight:"bolder"}}>Subscribe to our Foregien Policy NewsLetter</h2>
                <p>Sign up for a weekly curated briefing of the most important strategic affairs stories from across the world.</p>
                <FormControl isRequired>
                <FormLabel>Email Adress</FormLabel>
                <Input/>
                <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
              </FormControl>
               </div>

               <div className='most-viewed'>
                <h3 className = "mostread">MOST READ</h3>
               
                 <MostRead/>
            
           
               </div>
               <hr style={{border:"4px solid black"}} />
               {/* end portion */}
               <div>
                <img style={{marginTop:"30%"}} src="https://tpc.googlesyndication.com/simgad/4593733724512172833" alt="" />
               </div>
               
              <div style={{marginTop:"5%"}}>
              <img class="ob-rec-image ob-show" loading="lazy" aria-hidden="true" src="https://images.outbrainimg.com/transform/v3/eyJpdSI6Ijk1NjRiZDY3Y2IwYjYwOWY3NTJkNWU2ZDc1YTE5ZGYyNGUxNjhkZjUyNTVhNDdjMDdjYjg2MWNhMWVkZmQ2YWMiLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp" onload="this.className+=' ob-show'" alt="West Bengal: Reduce Fat With Laser Liposuction (See Total Prices)" title="West Bengal: Reduce Fat With Laser Liposuction (See Total Prices)" onerror="OBR.extern.imageError(this)"></img>
               <span class="ob-unit ob-rec-text" data-type="Title" title="West Bengal: Reduce Fat With Laser Liposuction (See Total Prices)">West Bengal: Reduce Fat With Laser Liposuction (See Total Prices)</span>
              </div>
{/* 
              <div style={{marginTop:"5%"}}>
              <img class="ob-rec-image ob-show" loading="lazy" aria-hidden="true" src="https://images.outbrainimg.com/transform/v3/eyJpdSI6IjA1Y2Q1OTBhYjE5ZDgxMmU0ZjZkZTNhMjU2Y2MyMDY2NDc1ZmFjNmNmOTU3MTEyM2QyZmYxZWYwNTk2OWM1NjciLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp" onload="this.className+=' ob-show'" alt="[Pics] 21 Famous People Who Went Missing And Were Never Found To This Day" title="[Pics] 21 Famous People Who Went Missing And Were Never Found To This Day" onerror="OBR.extern.imageError(this)"/>
              <span class="ob-unit ob-rec-source" data-type="Source">Dubai Hotels | Search Ads</span>
              </div> */}
              <div>
              {/* <AspectRatio/> */}
              </div>
              <div class="fixed-top"style={{border:"1px solid gray",marginTop:"6%"}}>
              <img src="https://tpc.googlesyndication.com/simgad/4593733724512172833" border="0" width="300" height="250" alt="" class="img_ad"/>
              </div>
               
               
             
      </div>

    </div>
    </>
      
    
  )
}

export default World

