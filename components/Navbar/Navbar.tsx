"use client";
import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../utils/useWindowDimension';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.css"

const Navbar: React.FC = () => {
    const { width } = useWindowDimensions();
    const isMobile: boolean = width <= 768;


    const [clcont, setClcont] = useState("nav__content");
    const [clconth, setClconth] = useState("clconth");
    const [fl, setFl] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [clnav, setClnav] = useState(`navi ${scrollPosition > 20 ? "navi__scroll" : ""}`);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const handleClick = () => {
        setClcont(`nav__content ${isMobile ? "dflexc" : ""}`);
        setFl(1);
    };

    const handleClose = () => {
        setClcont(`nav__content ${isMobile ? "nflexc" : ""}`);
        setFl(0);
    };

    // Effects
    useEffect(() => {
        setClnav(`navi ${isMobile ? "nflex" : ""} ${scrollPosition > 20 ? "navi__scroll" : ""}`);
        setClcont(`nav__content ${isMobile ? "nflexc" : ""}`);
        setClconth(`clconth ${isMobile ? "nflexh" : ""}`);
    }, [isMobile]);

    useEffect(() => {
        setClnav(`navi ${isMobile ? "nflex" : ""} ${scrollPosition > 20 ? "navi__scroll" : ""}`);
    }, [scrollPosition]);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <div className={clnav}>
                <div className={clconth}>
                    <Link href="#home">
                        <span>{`<Ansh Choudhary />`}</span>
                    </Link>
                    {isMobile &&
                        <div onClick={fl === 0 ? handleClick : handleClose}>
                            {fl === 0 ? <MenuIcon style={{ fontSize: "2rem", position: "relative", top: "2px" }} /> : <CloseIcon style={{ fontSize: "2rem", position: "relative", top: "2px" }} />}
                        </div>
                    }
                </div>
                <div className={clcont}>
                    <Link href='#project'>
                        <span style={{fontWeight: 400}}>Projects</span>
                    </Link>
                    <a href='https://drive.google.com/file/d/1yLBaL3ieNws4zlIUrPgtZRP4uAE42NkG/view?usp=drivesdk' rel="noreferrer" target='_blank' ><span style={{fontWeight: 400}}>Resume</span></a>
                    <Link href='#about'>
                    <span style={{fontWeight: 400}}>About</span>
                    </Link>
                    <Link href='#skills'>
                    <span style={{fontWeight: 400}}>Skills</span>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
