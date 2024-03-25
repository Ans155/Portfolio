import React from 'react';
import Image from 'next/image';
import './About.css'

const About: React.FC = () => {
    return (
      <div className='about' id='about'>
        <img src='/profile.jfif' alt='profile' id='pic' />
        <div className='about__content'>
          <h1>About Me</h1>
          <p>
            I am a Full Stack Developer with a Bachelor's of Technology in Electronics & Communication Engineering from IIIT, Jabalpur. I have a passion for learning and sharing my knowledge with others.
          </p>
          <a href='' target='_blank' rel='noreferrer'>
            Resume
          </a>
        </div>
      </div>
    );
  };
  
  export default About;

