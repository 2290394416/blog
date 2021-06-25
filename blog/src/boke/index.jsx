import React from 'react';
import Article from './Article';
import './index.css';

export default function Blog() {
  function fristclick() {
    main.innerHTML = < Article />;
  }
  function secondclick() {
    main.innerhtml = 111
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
            <Article />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="load">后面没有了...</div>
      </div>
    </div>
  )
}