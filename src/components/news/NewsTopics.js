import React from 'react'

const NewsTopics = (props) => {
    console.log(props.topic)
  return (
    <h4>{props.topic}</h4>
  )
}

export default NewsTopics