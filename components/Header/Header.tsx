import React from 'react';
import './Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import CodeforcesIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header: React.FC = () => {
    return (
        <div className='header' id='home'>
            <div className='header__content'>
                <h1>Ansh Choudhary</h1>
                <h4>Full Stack Developer</h4>
                <div className='header__socialhandles'>
                    <a href="https://github.com/Ans155" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon style={{ fontSize: '3.4rem', marginRight:'0.4rem' }} />
                    </a>
                    <a href="https://leetcode.com/Ansh154/" target="_blank" rel="noopener noreferrer">
                    <Image src='/LeetCode.svg' alt="LeetCode"  width={40} height={40} style={{ width: '3.4rem' , marginRight:'0.6rem' }} />
                    </a>
                    <a href="https://codeforces.com/profile/ansh_155" target="_blank" rel="noopener noreferrer">
                    <Image src='/code-forces.svg' alt="Codeforces" width={40} height={40} style={{ width: '3.4rem' , marginRight:'0.6rem' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/ansh-choudhary-973106238/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon style={{ fontSize: '3.4rem' }} />
                    </a>
                </div>
                <a href="#about" className='header__about'>
                    More about me
                </a>
            </div>
        </div>
    );
};

export default Header;
