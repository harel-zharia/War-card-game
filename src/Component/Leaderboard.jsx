import React, { useState } from 'react';
import './Card.css';
import GamePage from './GamePage';

export default function Leaderboard(props) {
  
  
  return (
    <div>
<table>
<tr className='colloumns'>
  <th className='colloumns'>
    Names{props.leaderboard.map(val=>{
      return <p>{val.name}</p>
    })}
  </th>

  <th className='colloumns'>
    Wins{props.leaderboard.map(val=>{
      return <p>{val.wins}</p>
    })}
  </th>

  <th className='colloumns'>
    Loses{props.leaderboard.map(val=>{
      return <p>{val.loses}</p>
    })}
  </th>

<th className='leftColloumn'>
Ties{props.leaderboard.map(val=>{
      return <p>{val.tie}</p>
    })}
</th>
</tr>
</table>
    </div>
  )
}
