"use client";
import React, { useState } from 'react';
import './Skills.css';
import ProgressBar from './ProgressBar';

const skills = [
  [
    { name: "Javascript", level:98 },
    { name: "React", level: 98 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 80 },
    { name: "Bootstrap", level: 90 },
    { name: "Material UI", level: 70 }
  ],
  [
    { name: "Node.js", level: 100 },
    { name: "Express.js", level: 96 },
    { name: "MongoDB", level: 100 },
    { name: "C++", level: 100 },
    { name: "Python", level: 80 },

  ]
];

const Skills: React.FC = () => {
  const [data, setData] = useState(skills[0]);
  const [cl, setcl] = useState(0);
  const [st1, setst1] = useState("clicked");
  const [st2, setst2] = useState("unclicked");

  const handle1 = () => {
    setcl(0);
    setData(skills[0]);
    setst1("clicked");
    setst2("unclicked");
  };

  const handle2 = () => {
    setcl(1);
    setData(skills[1]);
    setst1("unclicked");
    setst2("clicked");
  };

  return (
    <div className='skills' id='skills'>
      <h1>Skills</h1>
      <div className='skills__content'>
        <div className='skills__head'>
          <h2 className={st1} onClick={handle1}>Frontend</h2>
          <h2 className={st2} onClick={handle2}>Backend</h2>
        </div>
        <div className='skills__data'>
          {data.map((skill, index) => (
            <div key={index} className='skills__box'>
              <ProgressBar name={skill.name} progress={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
