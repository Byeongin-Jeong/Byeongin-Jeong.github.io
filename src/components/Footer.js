import React from 'react';
import './Footer.css';
// import { Button } from './Button';
//import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='website-rights'>ⓒ 2022. Jeong Byeong In. All rights reserved.</div>
                <div className='social-icons'>
                    <a
                        className='social-icon-link github'
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Byeongin-Jeong'>
                        <i className="fab fa-github"/>
                    </a>
                    <a
                        className='social-icon-link blog'
                        target='_blank'
                        rel='noreferrer'
                        href='https://choco-life.tistory.com/'>
                        <i className='fab fa-blogger-b'/>
                    </a>
                    <a
                        className='social-icon-link linkedin'
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/byeongin-jeong/'>
                        <i className='fab fa-linkedin'/>
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;
