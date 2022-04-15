import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>정 병 인</h1>
      <p>경험과 실력으로 무장한 풀스택 개발자</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          더 알아보기
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
