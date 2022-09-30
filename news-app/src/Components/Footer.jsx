import React from 'react';
import "./Footer.css";
import{Box,
     Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,} from "@chakra-ui/react";
    import {ChevronRightIcon} from "@chakra-ui/icons"
import { BsFacebook,BsInstagram,BsYoutube,BsTwitter,} from "react-icons/bs";
function Footer() {
  return (
     <div className='main-footer'>
        <Box className='footer-header'>
            {/* footer Header */}
            <div>
            <a href="https://www.firstpost.com/"><img width="116" height="33" alt="" src="https://www.firstpost.com/static/images/fp-logo.png"/></a>
            </div>

            <div className='socialDivs'>
            <a href="https://www.facebook.com/" target="_blank"rel="noreferrer">
                <BsFacebook  color = "Blue"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank"rel="noreferrer">
                <BsInstagram color='Pink'/>
                </a>
                <a href="https://www.youtube.com/" target="_blank"rel="noreferrer">
                <BsYoutube color='Red'/>
                </a>
                <a href="https://www.twitter.com/" target="_blank"rel="noreferrer">
                <BsTwitter color='cornflowerblue'/>
                </a>
            </div>
        </Box>
        <Box className='footer-middle'>
            {/* footer Medium */}
            <div>
                <h3 className='bolder'>Firstpost</h3>
                <p>About FirstPost</p>
                <p>PressRelease</p>
                <p>Rss</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
            <div>
                <h3 className='bolder'>Section</h3>
                <p>Front Page</p>
                <p>Politics</p>
                <p>Sports</p>
                <p>India</p>
                <p>World</p>
                <p>Buiesness</p>
                <p>Entertainment</p>
                <p>Cricket</p>
                <p>Tech</p>
                <p>Health</p>
                <p>Photos</p>
                <p>Videos</p>
                <p>Press Releases</p>
                <p>Firstculture</p>
                <p>Long Reads</p>
                <p>Latest Mobiles</p>
                <p>Latest Tablets</p>
                <p>Latest Laptops</p>
            </div>
            <div>
                <h3 className='bolder'>Plus</h3>
                <p>Cricket Livescore</p>
                <p>New Delhi</p>
                <p>Mumbai</p>
                <p>Fp exclusive</p>
                <p>Board exam results 2019</p>
                <p>Coronavirus</p>
            </div>
            <div>
                <h3 className='bolder'>Tools</h3>
                <p>Rss Feeds</p>
                <p className='bolder'>Apps</p>
                <p>ios</p>
                <p>Android</p>
            </div>
        </Box>
        <Box className='footer-last'>
            {/* footer last */}
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Network18 Sites</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem spacing='' >
    <BreadcrumbLink  spacing='4px'  href='#'>Money Control</BreadcrumbLink>
    <BreadcrumbLink  spacing='4px'  href='#'>&nbsp;&nbsp;News18</BreadcrumbLink>
    <BreadcrumbLink  spacing='4px'  href='#'>&nbsp;&nbsp;CnbcTv18</BreadcrumbLink>
    <BreadcrumbLink  spacing='4px'  href='#'>&nbsp;&nbsp;OverDrive</BreadcrumbLink>
    <BreadcrumbLink  spacing='4px'  href='#'>&nbsp;&nbsp;Forbes India</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  <hr color='gray' />
        </Box>
        <Box style={{textAlign:"center"}}>
        Copyright © 2022.
Firstpost
- All Rights Reserved.

<br />

Terms of use |
Privacy |
Cookie Policy |
        </Box>
     </div>
  )
}

export default Footer

