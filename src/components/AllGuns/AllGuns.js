import React, { useState, useEffect } from 'react';
import Gun from '../Gun/Gun';

const AllGuns = () => {
    //setting state 
    const [allguns, setAllguns] = useState([]);
    console.log(allguns);
    //function for fetching data 
    const loadData = async() =>{
        const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        const data = await res.json();
        setAllguns(data)
     }
    
    //fetching data from API
    useEffect(()=>{
       loadData()
    },[])
    
    return (
        <div>
            <h1 className='text-4xl font-bold'>All Guns</h1>
            <div>
                {
                  allguns.map(gun =><Gun gun={gun}></Gun>)
                }
            </div>
            
        </div>
    );
};

export default AllGuns;