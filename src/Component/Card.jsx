import React, { useState } from 'react'
import './Card.css';

export default function Card(props) {

  return (

    <div className='card'>
<h2>{props.cardValue}</h2>
    </div>
  )
}
