import React, { useState } from 'react';
import Article from './Article/index';
import Resume from './Resume/index';
import './index.css';

export default function Blog() {

  const [isArticle, setArticle] = useState(true);
  const [isResume, setResume] = useState(false);
  function fristclick() {
    setArticle(true);
    setResume(false)
  }
  function secondclick() {
    setArticle(false);
    setResume(true)
  }

  return (
    <div className="app">
      <div className="content">
        <div className="content-left">
          <div className="logo">Blog</div>
          <div className="item" onClick={fristclick}>
            <span>我的文章</span>
          </div>
          <div className="item" onClick={secondclick}>
            <span>个人简历</span>
          </div>
        </div>
        <div className="content-right">
          <div className="main">
            {isArticle ? <Article /> : null}
            {isResume ? <Resume /> : null}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="load">后面没有了...</div>
      </div>
    </div>
  )
}