import React,{useEffect, useState} from 'react'
import useFetch from '../Hooks/useFetch'
import ClipLoader from 'react-spinners/ClipLoader';
import {Link} from 'react-router-dom';
function CustomHookPage(props) {
    const [data,isFetching,api] = useFetch(props.url);
    let [color,setColor] = useState("#ffeeff")
 console.log("data",data);
useEffect(() =>{
api.GET();
},[]);
const Add = (title) =>{
    console.log("Add",title);
    api.POST(title)
}
  return (
    <div>
        <Link to='/'>back Home</Link>
        <h1>CustomHookPage</h1>
        <p>our useFetch expose api, right now we implement:</p>
        <ul><li>api.GET() for getting list of data</li><li>api.POST(title) to add new item</li></ul>
        
        <p>Add One will call our Custom Hook useFetch api.POST(title)</p>
        <label>Add One: </label>
    <button onClick={() => Add("Yossi")}>Add</button>
    <ClipLoader color={color} loading={isFetching} css={'display: block; margin: 0 auto;  border-color: red;'} size={150} />
    <ul>
        {
            data.map( item => {
                return( <li>{item.title}</li>);
            })
        }
    </ul>
    </div>
    
  )
}

export default CustomHookPage