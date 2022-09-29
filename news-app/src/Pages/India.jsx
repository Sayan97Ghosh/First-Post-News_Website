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

import {ChevronRightIcon} from "@chakra-ui/icons"
import Carousel from '../Components/Carousel';
import AspectRatio from '../Components/AspectRatio';
  

function India() {
  const [userData,setUserData] = useState([])
  const [scroll,setScroll] = useState()
  useEffect(()=>{
    async function getUser() {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&page=1&per_page=20&apiKey=a5cb8bfc66fe405d9c70fee81dce54ec`);
        setUserData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  },[])
 
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
    <BreadcrumbLink href='#'>India News</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
        {/* first the slider part */}
        {/* second the axios part */}
      <div className="heading">
      <h1>INDIA NEWS</h1>
      <hr className='hr'/><span className='span'></span><hr className='hr'/>
      </div>
    {/* slider */}

    <Carousel/>
    
      {/* all news data append here */}
     
      {userData.map((ele)=>(
        <div key={ele.publishedAt}>
          <img src= {ele.urlToImage} alt="" />
           <div className='title'>
            <p>India</p>
            <span className='span1'></span>
            <h3 style={{fontWeight:"bolder"}}>{ele.title}</h3>
            <p>{ele.description}</p>
           </div>
           
        </div>
      ))}

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
                <div>
               <li style={{border:"1px solid gray"}}>
                
                <a href="https://www.firstpost.com/india/delhi-liquor-scam-manish-sisodias-aide-vijay-nair-uncooperative-evasive-in-cbi-probe-destroyed-evidence-11356031.html" title="Delhi Liquor Scam: Manish Sisodia’s aide Vijay Nair ‘uncooperative’ ‘evasive’ in CBI probe, ‘destroyed’ evidence">
                    
                    <h3 class="top-head-title">
                        1.Delhi Liquor Scam: Manish Sisodia’s aide Vijay Nair ‘uncooperative’ ‘evasive’ in CBI probe, ‘destroyed’ evidence
                    </h3>
                    <h6 class="top-head-sum">
                       Vijay Nair was the CEO of Only Much Louder, an event company in the business of organising music festivals and big-ticket shows, apart from six other companies. He had joined AAP as a social media volunteer and was also active in fund-raising in 2013
                    </h6> 
                </a>                                                       
            </li>
            </div>
            {/* 2nd */}
            <div>

            <li style={{border:"1px solid gray"}}>
                
                <a href="https://www.firstpost.com/explainers/my-dad-will-be-king-you-better-watch-out-when-prince-george-sounded-like-a-dilli-wala-brat-11355721.html" title="‘My dad will be king, you better watch out’: When Prince George sounded like a 'Dilli wala brat'">
                    
                    <h3 class="top-head-title">
                        2.‘My dad will be king, you better watch out’: When Prince George sounded like a 'Dilli wala brat'
                    </h3>
                    <h6 class="top-head-sum">
                       Turns out Prince George is quite the brat. If royal author Katie Nicholl is to be believed, Prince William and Kate Middleton's eldest son has been throwing his weight around&nbsp;at&nbsp;school
                    </h6> 
                </a>                                                       
            </li>
            </div>
            {/* 3rd */}
            <div>

            
            <li style={{border:"1px solid gray"}}>
                
                <a href="https://www.firstpost.com/explainers/five-years-of-metoo-a-look-at-how-the-campaign-echoed-around-the-world-11356631.html" title="Five years of #MeToo: A look at how the campaign echoed around the world">
                    
                    <h3 class="top-head-title">
                       3.Five years of #MeToo: A look at how the campaign echoed around the world
                    </h3>
                    <h6 class="top-head-sum">
                       From Sweden to Israel, the #MeToo campaign to end sexual harassment and assault has reverberated around the world. It gave rise to homegrown hashtags, landmark cases and even anti-feminist backlashes
                    </h6> 
                </a>                                                       
            </li>
            </div>
            {/* 4th */}
            <div>

            
            <li style={{border:"1px solid gray"}}>
                
                <a href="https://www.firstpost.com/explainers/pfi-banned-a-look-at-the-whos-who-of-the-outlawed-radical-islamic-group-11353071.html" title="PFI banned: A look at the who's who of the outlawed radical Islamic group">
                    
                    <h3 class="top-head-title">
                       4.PFI banned: A look at the who's who of the outlawed radical Islamic group
                    </h3>
                    <h6 class="top-head-sum">
                       The Popular Front of India has now been banned by the Centre for five years for ‘terror activities’. This radical group comprises of top leaders and office bearers such as OMA Salam, P Koya, Anis Ahmed, Afsar Pasha and more
                    </h6> 
                </a>                                                       
            </li>
            </div>
            {/* 5th */}
            <div >

            
            <li style={{border:"1px solid gray"}}>
                
                <a href="https://www.firstpost.com/world/myanmar-junta-court-sentences-australian-economist-suu-kyi-to-three-years-11355491.html" title="Myanmar junta court sentences Suu Kyi, Australian economist to three years">
                    
                    <h3 class="top-head-title">
                        5.Myanmar junta court sentences Suu Kyi, Australian economist to three years
                    </h3>
                    <h6 class="top-head-sum">
                       Both have been detained since a coup in February last year, when the military ousted Suu Kyi's government, for which Sean Turnell was an adviser.
                    </h6> 
                </a>                                                       
            </li>
            </div>
            
            <hr style={{border:"4px solid black"}} />
               </div>

               <div>
                <img style={{marginTop:"30%"}} src="https://tpc.googlesyndication.com/simgad/4593733724512172833" alt="" />
               </div>
               
              <div style={{marginTop:"5%"}}>
              <img class="ob-rec-image ob-show" loading="lazy" aria-hidden="true" src="https://images.outbrainimg.com/transform/v3/eyJpdSI6Ijk1NjRiZDY3Y2IwYjYwOWY3NTJkNWU2ZDc1YTE5ZGYyNGUxNjhkZjUyNTVhNDdjMDdjYjg2MWNhMWVkZmQ2YWMiLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp" onload="this.className+=' ob-show'" alt="West Bengal: Reduce Fat With Laser Liposuction (See Total Prices)" title="West Bengal: Reduce Fat With Laser Liposuction (See Total Prices)" onerror="OBR.extern.imageError(this)"></img>
               <span class="ob-unit ob-rec-text" data-type="Title" title="West Bengal: Reduce Fat With Laser Liposuction (See Total Prices)">West Bengal: Reduce Fat With Laser Liposuction (See Total Prices)</span>
              </div>

              <div style={{marginTop:"5%"}}>
              <img class="ob-rec-image ob-show" loading="lazy" aria-hidden="true" src="https://images.outbrainimg.com/transform/v3/eyJpdSI6IjA1Y2Q1OTBhYjE5ZDgxMmU0ZjZkZTNhMjU2Y2MyMDY2NDc1ZmFjNmNmOTU3MTEyM2QyZmYxZWYwNTk2OWM1NjciLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp" onload="this.className+=' ob-show'" alt="[Pics] 21 Famous People Who Went Missing And Were Never Found To This Day" title="[Pics] 21 Famous People Who Went Missing And Were Never Found To This Day" onerror="OBR.extern.imageError(this)"/>
              <span class="ob-unit ob-rec-source" data-type="Source">Dubai Hotels | Search Ads</span>
              </div>
              <div>
              <AspectRatio/>
              </div>
              <div class="fixed-top"style={{border:"1px solid gray",marginTop:"6%"}}>
              <img src="https://tpc.googlesyndication.com/simgad/4593733724512172833" border="0" width="300" height="250" alt="" class="img_ad"/>
              </div>
               
               
             
      </div>

    </div>
    </>
      
    
  )
}

export default India
