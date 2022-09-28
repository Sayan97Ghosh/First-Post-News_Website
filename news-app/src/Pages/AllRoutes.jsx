import {Routes,Route} from 'react-router-dom'
import Auto from './Auto'
import Cricket from './Cricket'
import Entertainment from './Entertainment'
import Explainers from './Explainers'
import India from './India'
import Opinion from './Opinion'
import Politics from './Politics'
import Sports from './Sports'
import Tech from './Tech'
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
            <Route path = "/world"element = {<World/>}></Route>
        </Routes>
    
  )
}

export default AllRoutes