import React from 'react'
import './Experience.css'

const Experience: React.FC = () => {
  return (
    <div className='exp' id='exp'>
      <h1>Experiences</h1>
      <div className='exp__content'>
        <div >
          <img style={{width: "100px", height: "100px"}} src='/Stockgro.png' alt='Stockgro' />
          <h3>Project Intern</h3>
          <h3>Jan 2024 - March 2024</h3>
        </div>
        <div>
          <img style={{width: "250px", height: "60px"}} src='/Shoppeal.png' alt='Shoppeal'/>
          <h3>Software Developer Intern</h3>
          <h3>Dec 2023 - Present</h3>
        </div>
        <div>
          <img style={{width: "250px", height: "60px"}} src='/heycoach.png' alt='heycoach'/>
          <h3>Competitive Programming Intern</h3>
          <h3>Nov 2023 - Dec 2023</h3>
        </div>
      </div>
    </div>
  )
}

export default Experience