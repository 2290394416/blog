import React from 'react';
import Link from './Link';
import { data } from './data';
import './index.css'



export default function Article() {
  return (
    <div className="item-box">
      <h1 className="article">我的文章</h1>
      {data.map((item) =>
        (<Link key={item.name} {...item} />)
      )}
    </div>
  )
}