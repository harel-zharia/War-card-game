import React from 'react'
import Card from './Card'
import { useState } from 'react';
import './Card.css'

   let rounds=0;
   let playerPoints=0,comPoints=0;

export default function GamePage(props) {
  const[cardIndex,setCardIndex]=useState(0);

  const nextCard=()=>{   
      if(props.computer.cards[cardIndex]>props.player.cards[cardIndex]){
        comPoints++;
        rounds++;
      }
      else if(props.computer.cards[cardIndex]<props.player.cards[cardIndex]){
       playerPoints++
       rounds++;
      }
      else if(props.computer.cards[cardIndex]==props.player.cards[cardIndex]){
        rounds++;
      }
    if(cardIndex == 25){
      props.player.games++;
      if(comPoints>playerPoints){
        props.player.loses++;
        props.player.lastGame=false;
      }
   else if(comPoints<playerPoints){
     props.player.wins++;
     props.player.lastGame=true;
   }
   else if(comPoints==playerPoints){
    props.player.tie++;
    props.player.lastGame=null; 
   }
   rounds=0;
   playerPoints=0;
   comPoints=0;
   props.nextPage(2);
  }
  else{
    setCardIndex(cardIndex+1);
  }
  }

  return (
    <div className='gamepage'>
      <h1>{props.computer.name}</h1>
     <h3>Computer score: {comPoints}</h3>
      <Card cardValue={props.computer.cards[cardIndex]}></Card>
      <p>Round number: {rounds}</p>
      <Card cardValue={props.player.cards[cardIndex]}></Card>
      <h1>{props.player.name}</h1>
    <h3>Player score: {playerPoints}</h3>
      <button className='nextcard' onClick={nextCard}>Next cards</button>
    </div>
  )
}

