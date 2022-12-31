import React from 'react'
import s from "./style.module.css"

const NewsViewsContent = (props) => {
  return (
    <div>
      <div className={s.news}>
        <h2>{props.name}</h2>
        <img src={props.image} className={s.img}></img>
        <a href={props.url} target="_blank" className={s.link}>{props.url}</a>
      </div>
    </div>
  )
}

export default NewsViewsContent