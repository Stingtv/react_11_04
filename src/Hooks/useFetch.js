import React, { useState } from 'react'
import axios from 'axios';

const  useFetch = (baseUrl) => {
    const [data , setData] = useState([]);
    const [isFetching , setIsFetching] = useState(false);
    const GET =  async () => {
        console.log("useFetch GET ");
        setIsFetching(true);

        try{
            const {data} = await axios.get(baseUrl,{
                headers:{
                    "Access-Control-Allow-Origin": true
                }
            });
            setData(data);
            console.log(`useFetch Data Fetch: ${data.length} items`);
        }
        catch(err){
            console.log("useFetch exception: " , err);
        }
        finally{
            setTimeout( () =>  {
                setIsFetching(false);    
            },200)
            
        }
        
        
    };
    const POST =  async (title) => {
        console.log("useFetch GET ");
        setIsFetching(true);

        try{
            const {data} = await axios.get(baseUrl,{
                method:"POST",
                headers:{
                    "Access-Control-Allow-Origin": true
                }
            });
            setData((prev) => [...prev,{title: `title ${prev.length+1}`}]);
            console.log(`useFetch Data Fetch: ${data.length} items`);
        }
        catch(err){
            console.log("useFetch exception: " , err);
        }
        finally{
            setTimeout( () =>  {
                setIsFetching(false);    
            },200)
            
        }
        
        
    };
    const api = {
        GET,
        POST
    }
    return [data, isFetching,api];
}

export default useFetch