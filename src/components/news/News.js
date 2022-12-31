import React from 'react'
import {Topics} from './Topics'
import NewsTopics from './NewsTopics'
import data from "./data.json"
import NewsViewsContent from './NewsViewsContent'
import s from "./style.module.css"

const News = () => {

  return (
    <div>
      <h2 className={s.topics}>{Topics.map((topic)=>(
        <NewsTopics
        key={topic}
        topic={topic}
        />
      ))}
      </h2>
      <h2 className={s.news}>{data.NewsContent.map((el)=>(
        <NewsViewsContent
        key={el.id}
        name={el.name}
        url={el.web}
        image={el.image}
        />
      ))}</h2>
    </div>
  )
}

export default News