import React, { useState,useEffect } from 'react'
import s from "./style.module.css"

const Clock = (props) => {

  //useState Time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    let timer;
    timer = setInterval(()=>{
          setTime(new Date().toLocaleTimeString());
    },1000);
  })

  return (
    <>
    <h1 className={s.reloj}>{time}</h1>
    </>
    
  )
    
}

export default Clock