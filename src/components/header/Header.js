import React from 'react'
import s from "./style.module.css"

const Header = (props) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>{props.name}</h1>
      <h3 className={s.content}>{props.description}</h3>
    </div>
  )
}

export default Header