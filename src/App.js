import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Galary from './component/Galary';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search,setSearch] = useState("")
  const [data,setData] = useState([])
  useEffect(()=>{
  },[])
  const changeHandler = e => {
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      response => setData(response.data.photos.photo)
    )
    console.log(search)
  }
  return (
    <div>
      <center>
        <h2>Gallery Snapshot</h2>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" value={search} onChange={changeHandler} /><br/><br/>
          <input type="submit" name="search"/>
        </form>
        <br />
       
        {data.length>=1?<Galary data={data}/>:<h4>No data loaded</h4>}
      </center>
    </div>
  )
}

export default App