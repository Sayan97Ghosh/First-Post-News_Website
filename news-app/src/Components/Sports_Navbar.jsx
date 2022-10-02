import React from 'react';
import  './Navbar.css';
import {Link} from "react-router-dom";
import {
  
    Tabs,
    TabList,
    Tab,
    Divider,
    Center,
          
  } from '@chakra-ui/react'



  
function Sports_Navbar() {
 

  return (
    
    <div className='sport-navbar'>   
        
        {/* nvabar 2 append here */}
       
       <div className='navbar3'>

       <Tabs>
  <TabList>
    <Link to ="/firstcricket"><Tab>Firstcricket</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/hockey"><Tab>Hockey</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/cricket"><Tab>Cricket</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/football"><Tab>Football</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/tennis"><Tab>Tennis</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/badminton"><Tab>Badminton</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
</Center>
    <Link to ="/nba"><Tab>NBA</Tab></Link>
    <Center height='38px'>
  <Divider orientation='vertical' />
    </Center>
    </TabList>
</Tabs>   
    </div>


    </div>  
 
  )
}

export default Sports_Navbar;
