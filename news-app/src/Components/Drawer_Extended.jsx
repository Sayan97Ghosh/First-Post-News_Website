
import React from 'react';
import ReactDOM from 'react-dom';
import "./DrawerStyle.css";
import { AiOutlineMenuUnfold,AiFillCopy,AiOutlineDesktop,AiOutlineBank } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
function Drawer_Extended() {
  return (
    <div>
       <Tabs>
        <TabList>
          <Tab>
            <AiOutlineMenuUnfold/>
            <p>Section</p>
          </Tab>
          <Tab>
            <AiFillCopy/>
            <p>More</p>
          </Tab>
          <Tab>
         <AiOutlineDesktop/>
            <p>Shows</p>
          </Tab>
          <Tab>
          <AiOutlineBank/>
            <p>F.Brands</p>
          </Tab>
         
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2 className="items">Home</h2>
            <h2 className="items">Health</h2>
            <h2 className="items">India</h2>
            <h2 className="items">World</h2>
            <h2 className="items">Politics</h2>
            <h2 className="items">Arts & Culture</h2>
            <h2 className="items">Tech / Audio</h2>
            <h2 className="items">Opinion</h2>
            <h2 className="items">Sports</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h2 className="items">Home</h2>
            <h2 className="items">Health</h2>
            <h2 className="items">India</h2>
            <h2 className="items">World</h2>
            <h2 className="items">Politics</h2>
            <h2 className="items">Arts & Culture</h2>
            <h2 className="items">Tech / Audio</h2>
            <h2 className="items">Opinion</h2>
            <h2 className="items">Sports</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h2 className="items">Home</h2>
            <h2 className="items">Health</h2>
            <h2 className="items">India</h2>
            <h2 className="items">World</h2>
            <h2 className="items">Politics</h2>
            <h2 className="items">Arts & Culture</h2>
            <h2 className="items">Tech / Audio</h2>
            <h2 className="items">Opinion</h2>
            <h2 className="items">Sports</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
         
            <h2 className="items">#VOLVO</h2>
            <h2 className="items">Crypto</h2>
            <h2 className="items">Asia Cup 2022</h2>
            <h2 className="items">Assembly Election 2022</h2>
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  )
}

export default Drawer_Extended
