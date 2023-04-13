import React, { useState } from 'react';
import './big-box.css';
import './ring';
import Ring from './ring';

const BigBox = () => {
  return (
    <div className="container">
        <div class="left">
            <h3 className="left-title">Test with your own text</h3>
            <br />
            <textarea type="text" class="input-box" />
            <br />
            <br />
            <br />
            <button class="button">
            Classify Text
            </button>
        </div>
      <div className="right">
        <h3 className="left-title">Results</h3>
        <div className="results-container" >
            <Ring percent={48} size={100} color="#0aab6b" />
            <br />
            <div className="results-container-text">
                <text style={{fontSize:20, marginBottom: 4, color: "#0aab6b"}}>Positive Sentiment</text>
                <text style={{fontSize:16, marginBottom: 4, color: "#A5A5A5"}}>This text is mostly composed with positive sentiment</text>
            </div>
        </div>
      </div>
    </div>
  );
};
export default BigBox;