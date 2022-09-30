import React,{useState,useEffect} from 'react'
import axios from "axios";

function MostRead() {
    const[mostRead,setMostRead] = useState([])
    useEffect(()=>{
        async function getData() {
          try {
            const response = await axios.get(`
            https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a5cb8bfc66fe405d9c70fee81dce54ec`);
          
            setMostRead(response.data.articles);
          } catch (error) {
            console.error(error);
          }
        }
        getData();
      },[])
      console.log(mostRead);
  return (
      <div>
        {mostRead.map((ele)=>(
            <div style={{border:"2px solid gray"}} key = {ele.title}>
                <a href={ele.url}target="_blank">
                <h3 style={{fontSize:"20px",fontWeight:"bolder"}}>{ele.title}</h3>
                <p>{ele.description}</p>
                </a>
            </div>

        ))}
      </div>
  )
}

export default MostRead