import {Routes,Route} from 'react-router-dom'
import Auto from './Auto'
import Badminton from './Badminton'
import Cricket from './Cricket'
import Entertainment from './Entertainment'
import Explainers from './Explainers'
import Firstcricket from './Firstcricket'
import Football from './Football'
import Hockey from './Hockey'
import India from './India'
import NBA from './NBA'
import Opinion from './Opinion'
import Politics from './Politics'
import Sports from './Sports'
import Tech from './Tech'
import Tennis from './Tennis'
import World from './World'

function AllRoutes() {
  return (
        <Routes>
            <Route path = "/"element = {<India/>}></Route>
            <Route path = "/auto"element = {<Auto/>}></Route>
            <Route path = "/cricket"element = {<Cricket/>}></Route>
            <Route path = "/entertainment"element = {<Entertainment/>}></Route>
            <Route path = "/explainers"element = {<Explainers/>}></Route>
            <Route path = "/opinion"element = {<Opinion/>}></Route>
            <Route path = "/politics"element = {<Politics/>}></Route>
            <Route path = "/sports"element = {<Sports/>}></Route>
            <Route path = "/tech"element = {<Tech/>}></Route>
            <Route path = "/badminton"element = {<Badminton/>}></Route>
            <Route path = "/firstcricket"element = {<Firstcricket/>}></Route>
            <Route path = "/hockey"element = {<Hockey/>}></Route>
            <Route path = "/football"element = {<Football/>}></Route>
            <Route path = "/tennis"element = {<Tennis/>}></Route>
            <Route path = "/nba"element = {<NBA/>}></Route>
            <Route path = "/world"element = {<World/>}></Route>
            
        </Routes>
    
  )
}

export default AllRoutes