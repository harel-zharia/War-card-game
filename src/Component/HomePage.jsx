import React, { useState } from 'react';
import Leaderboard from './Leaderboard';

export default function HomePage(props) {

  const[name,setName]=useState('');
  const[flag,setFlag]=useState(false);

  const ShowLeaderboard=()=>{
    props.playerList.sort((a,b)=>(a.wins<b.wins)? 1: -1);
    
    if(flag==false){
      setFlag(true);
    }
    else{
    setFlag(false);  
    }
  }

const validName=()=>{
if(name.length >0){
  props.next(name);
}
else{
  alert('please enter your name');
}
}

  return (

    <div className='homepage'>
      <h1>Get ready for war!</h1>
      <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter your name'></input>
      <button style={{marginLeft:'10px'}} onClick={validName}>Start</button><br></br>
      <button className='leader' onClick={ShowLeaderboard}>Player leaderboard</button>
      {flag ? (<Leaderboard leaderboard={props.playerList}/>): ''}
    </div>
  )
}
