import React from 'react'
import './Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects: React.FC = () => {
  return (
    <div className='project' id='project'>
      <h1>Recent Projects</h1>
      <div className='project__content'>
        <div className='proj'>
          <div className='proj__name'>HospitalityHub</div>
          <div className="links-column">
            <a href='https://hospitalityhub.netlify.app/login'><GitHubIcon style={{ fontSize: "2rem", position: "relative", top: "0px" }}/> Live</a>
            <a href='https://github.com/Ans155/HospitalityHub'><GitHubIcon style={{ fontSize: "2rem", position: "relative", top: "2px" }}/> Repo</a>
          </div>
          <h3>Tech Stack: 
            <div>React</div>
            <div>Node</div>
            <div>MongoDB</div>
            <div>ExpressJs</div>
          </h3>
        </div>
        <div className='proj'>
          <div className='proj__name'>StockBot</div>
          <a href='https://github.com/Ans155/StockBot'> <GitHubIcon style={{ fontSize: "2rem", position:"relative", top:"2px"}}/>Repo</a>

          <h3>Tech Stack: 
            <div>React</div>
            <div>FastAPI</div>
            <div>NLP</div>
            <div>Langchain</div>
            <div>LLAMA-2 LLM</div>
          </h3>
        </div>
        <div className='proj'>
          <div className='proj__name'>admin_Dashboard</div>
          <div className="links-column">
            <a href='https://admin-market-frontend.onrender.com/dashboard'><GitHubIcon style={{ fontSize: "2rem", position: "relative", top: "0px" }}/> Live</a>
            <a href='https://github.com/Ans155/admin_Dashboard'><GitHubIcon style={{ fontSize: "2rem", position: "relative", top: "2px" }}/> Repo</a>
          </div>
          
          <h3>Tech Stack: 
          <div>React</div>
            <div>Node</div>
            <div>MongoDB</div>
            <div>ExpressJs</div>
          </h3>

        </div>
        <div className='proj'>
          <div className='proj__name'>chat_dapp</div>
          <a href='https://github.com/Ans155/chat_dapp'> <GitHubIcon style={{ fontSize: "2rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Tech Stack: 
            <div>NextJs</div>
            <div>Web3Js</div>
            <div>Hardhat</div>
            <div>Metamask</div>
          </h3>

        </div>
      </div>
    </div>
  )
}

export default Projects