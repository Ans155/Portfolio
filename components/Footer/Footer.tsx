import React from 'react'
import './Footer.css'
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: React.FC = () => {
  return (
    <div className='footer' id='exp'>
      <h1>Get in Touch</h1>
      <p>
        I'm currently looking for full-time FullStack Developer/Backend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, <a href='mailto:anshchoudhary155@gmail.com'>anshchoudhary155@gmail.com</a>.
      </p>
      <h5>
        <CodeIcon style={{ fontSize : '1rem'}}/> with <FavoriteIcon style={{ fontSize : '1rem'}}/> by <a href='https://github.com/Ans155' target='_blank' rel="noreferrer">Ansh Choudhary</a> using <img src='https://cdn.iconscout.com/icon/free/png-256/free-react-1543566-1306069.png?f=webp&w=256' alt='react' />
      </h5>
    </div>
  )
}

export default Footer