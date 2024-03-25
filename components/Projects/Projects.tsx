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
          <a href='' > <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href=''> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 59.7%</div>
            <div>CSS 34.2%</div>
            <div>HTML 6.1%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>StockBot</div>
          <a href=''> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href=''> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 97.5%</div>
            <div>CSS 0.5%</div>
            <div>HTML 2.0%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>admin_Dashboard</div>
          <a href=''> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href=''> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 75.0%</div>
            <div>CSS 18.9%</div>
            <div>HTML 6.1%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>chat_dapp</div>
          <a href='#'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='#'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 77.2%</div>
            <div>CSS 20.8%</div>
            <div>HTML 1.1%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects