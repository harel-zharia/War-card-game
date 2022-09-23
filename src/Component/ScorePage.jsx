import React from 'react';

export default function ScorePage(props) {

  const showWinner=()=>{
  return <h1 className='points'>{props.player.wins} - {props.player.loses}</h1>
  }

  const showGameCondition=()=>{
    if(props.player.lastGame== true){
      return <h1 className='scorePageHeaders'>you won</h1>
    }
    else if(props.player.lastGame== false){
      return <h1 className='scorePageHeaders'>you lose</h1>
    }
    else{
      return <h1 className='scorePageHeaders'>Tie</h1>
    }
  }

  const replay =()=>{
    props.shuffle(props.player,props.computer);
    props.pageReset(1);
  }

  const returnBack=()=>{
    props.pageReset(0);
  }

  return (
    <div>
    <div className='scorepage'>
    <button className='scorePageButtons' onClick={returnBack}>return to homepage</button>
      {showGameCondition()}
      {showWinner()}
      <button className='scorePageButtons botButton' onClick={replay}>Play again</button>
      </div>
    </div>
  )
}
