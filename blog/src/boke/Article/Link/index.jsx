import React from 'react';



export default function Link(props) {
  return (
    <a className="article-a" href={props.url} target='__block'>
      <h3 className="title">{props.title}</h3>
      <div className="synopsis">{props.synopsis}</div>
    </a>
  )
}