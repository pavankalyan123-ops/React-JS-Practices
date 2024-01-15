import {useState,useEffect} from 'react';

export default function useGetApi(urls){
    const[data,setData]=useState([])
   useEffect(()=>{
    fetchData();
   },[])
    async function fetchData(){
        const promises=urls.map(async(url)=>{
            const api=await fetch(url);
            const res=await api.json();
            return res;
        })
        const fetchedData=await Promise.all(promises);
        setData(fetchedData)
    }
    return data;
}

//what I uderstood is first it will go to the outside promises as it async and then wait as we mentioned await Promise.all
//once complete the fetching we will get the res value and will continue Promise.all method