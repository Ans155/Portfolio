import React from 'react'
import './Experience.css'
import Image from 'next/image'
const Experience: React.FC = () => {
  return (
    <div className='exp' id='exp'>
      <h1>Experience</h1>
      <div className='exp__content'>
        <div >
        <Image style={{width: "100px", height: "100px"}} src='/Stockgro.png' alt='Stockgro' width={100} height={100}/>
          <h3>Project Intern</h3>
          <h3>Jan 2024 - March 2024</h3>
        </div>
        <div>
        <Image style={{width: "250px", height: "60px"}} src='/Shoppeal.png' alt='Shoppeal' width={250} height={60}/>
          <h3>Software Developer Intern</h3>
          <h3>Dec 2023 - Present</h3>
        </div>
        <div>
        <Image style={{width: "250px", height: "60px"}} src='/heycoach.png' alt='heycoach' width={250} height={60}/>
          <h3>Competitive Programming Intern</h3>
          <h3>Nov 2023 - Dec 2023</h3>
        </div>
      </div>
    </div>
  )
}

export default Experience