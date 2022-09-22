import React, { useState, useEffect } from 'react';
import Gun from '../Gun/Gun';

const AllGuns = ({addToCart}) => {
    /* console.log(addToCart) */
    //setting state 
    const [allguns, setAllguns] = useState([]);
   
    //function for fetching data 
    const loadData = async() =>{
        const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        const data = await res.json();
        setAllguns(data)
     }
    
    //fetching data from API using useEffect hook
    useEffect(()=>{
       loadData()
    },[])
    
    return (
        <div>
            <h1 className='text-4xl font-bold py-10'>All Guns</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-10'>
                {
                  allguns.map(gun =><Gun  gun={gun}  key = {gun.id}  addToCart = {addToCart}></Gun>)
                }
            </div>
            
        </div>
    );
};

export default AllGuns;