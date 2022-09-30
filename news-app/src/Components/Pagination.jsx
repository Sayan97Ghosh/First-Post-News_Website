import React from 'react'
import {Button} from "@chakra-ui/react"
function Pagination({page,setPage}) {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <Button disabled={page==1}onClick={()=>setPage(page-1)}>prev</Button>
        <Button>{page}</Button>
        <Button disabled={page==10} onClick={()=>setPage(page+1)}>Next</Button>
    </div>
  )
}

export default Pagination