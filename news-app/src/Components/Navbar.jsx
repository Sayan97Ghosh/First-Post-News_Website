import React from 'react';
import  './Navbar.css';
import {Link} from "react-router-dom";
import { Search2Icon} from "@chakra-ui/icons"
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook,BsInstagram,BsYoutube,BsTwitter,} from "react-icons/bs";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Tabs,
    TabList,
    Tab,
    Divider,
    Center,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Input,
          
  } from '@chakra-ui/react'


  
function Navbar() {
 
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

  return (
    
    <div className='Navbar'>
        <div className='black'>
         <div>
            {/* enter 3  chakra ui */}
            <Button ref={btnRef} colorScheme='' onClick={onOpen}>
            <AiOutlineMenu/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{border:"1px solid gray",height:"100px",padding:"23px"}}></DrawerHeader>

          <DrawerBody >
           {/* Add all the tab */}

          
          </DrawerBody>

          <DrawerFooter style={{display:"flex",justifyContent:"left",gap:"13px",border:"1px solid gray",borderRadius:"3px"}}>
        
                {/* social div */}
                <a href="https://www.facebook.com/"rel="noreferrer">
                <BsFacebook  color = "Blue"/>
                </a>
                <a href="https://www.instagram.com/"rel="noreferrer">
                <BsInstagram color='Pink'/>
                </a>
                <a href="https://www.youtube.com/"rel="noreferrer">
                <BsYoutube color='Red'/>
                </a>
                <a href="https://www.twitter.com/"rel="noreferrer">
                <BsTwitter color='cornflowerblue'/>
                </a>
                
               
                
              
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
         </div>
         <div>
            {/* Logo */}
            <img style={{marginLeft:"105%"}} src="https://www.firstpost.com/static/images/fp-desk-logo.png" alt="firstpost" />
         </div>
              <div  style={{marginLeft:"10%"}} className='social'>
                {/* social div */}
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
              <div style={{display:"flex",gap:"30px"}}>
              <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
              </div>

              <Popover>
  <PopoverTrigger>
    <Button style={{backgroundColor:"black"}}><Search2Icon style={{color:"White"
        }} /></Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
   
    <PopoverHeader
    style={{height:"150px"}}><Input/></PopoverHeader>
   
  </PopoverContent>
</Popover>
              
         
        </div>
        {/* nvabar 2 append here */}
       
       <div className='navbar2'>

       <Tabs>
  <TabList>
    <Link to ="/"><Tab>India</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/auto"><Tab>Auto</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/cricket"><Tab>Cricket</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/entertainment"><Tab>Entertainment</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/explainers"><Tab>Explainers</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/opinion"><Tab>Opinion</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/politics"><Tab>Politics</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/sports"><Tab>Sports</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/tech"><Tab>Tech</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/world"><Tab>World</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>

  </TabList>
</Tabs>
<div className='additional'>
  <a href="https://www.coinlive.com/?utm_source=google&utm_medium=ppc&utm_campaign=o-crypto%20news-b-ox-ggl-cpc-137450199758-g--{campaign_id}"  target="_blank"rel="noreferrer">
  <button style={{backgroundColor:"blue",color:"white",borderRadius:"5px",fontSize:"16px",fontWeight:"bold"}}>Crypto</button>
  </a>
   
   <a href="https://www.news18.com/netrasuraksha/" target="_blank"rel="noreferrer">
   <img  src="https://www.firstpost.com/static/images/netrasuraksha_L2_103x25px.jpg" width="103" height="25" alt="netrasuraksha" title="netrasuraksha"></img>
   </a>
   </div>
   
       </div>
    </div>
 
  )
}

export default Navbar;