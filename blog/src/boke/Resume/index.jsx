import React from 'react';
import './index.css'


class Resume extends React.Component {
  constructor() {
    super();

  }
  render() {
    return (<div className="item-box">
      <h1 className="resume">个人简历</h1>
      <div className="introduce">简介</div>
    </div>)
  }
}
export default Resume;