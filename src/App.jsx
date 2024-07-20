import { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route ,Routes}from 'react-router-dom';

import './App.css'
import Header from './Header'
import Mainborad from './Mainborad'
import unsplash from './api/Unsplash'


function App() {

  const[pin,setpins]=useState([]);

  const getImage=(term)=>{
    return unsplash.get("https://api.unsplash.com/search/photos",{
      params:{
        query:term
      }
    })
  }

 const onSearchSubmit=(term)=>{
  console.log("on search submit",term)
    getImage(term).then((res)=>{
      let results=res.data.results;

      let newPin=[
        ...results,
        ...pin,
      ]

      newPin.sort(function(a,b){
        return 0.5-Math.random();
      })
      setpins(newPin)
    })
 }

 const getNewPins=()=>{
  let promises=[];
  let pinData=[];

  let pin=['ocean','bali','flowers','bali','perfumes','mountains','indian food']

  pin.forEach((pinTerm)=>{
    promises.push(
      getImage(pinTerm).then((res)=>{
        let results=res.data.results;

        pinData=pinData.concat(results);

        pinData.sort(function(a,b){
          return 0.5 -Math.random();
        })
      }
      )
    )
  })
  Promise.all(promises).then(()=>{
    setpins(pinData);
  })
 }

 useEffect(()=>{
  getNewPins()

 },[])



  return (
    <div className='App'>
      
        <Header onsubmit={onSearchSubmit}/>
        <Mainborad pin={pin}/>

      
      
    </div>
  
  )
}

export default App
