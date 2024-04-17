import React from 'react';
import Image from 'next/image';
import './About.css';

const About: React.FC = () => {
  return (
    <div className='about' id='about'>
        <Image src='/profile.jfif' alt='Profile' width={400} height={400} style={{borderRadius:"300px"}}/>

      <div className='about__content'>
        <h1>About Me</h1>
        <p>
          I am a Full Stack Developer with a Bachelor&apos;s of Technology in Electronics & Communication Engineering from IIIT, Jabalpur. I have a passion for learning and sharing my knowledge with others.
        </p>
        <a href='https://drive.google.com/file/d/1FrY6pELA42yPNs0ft_gPlxH43BAGESRW/view?usp=sharing' target='_blank' rel='noreferrer'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
