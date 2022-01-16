import React, {createRef, useEffect, useRef} from 'react';
import styles from './menu.module.css'
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faRocket} from "@fortawesome/free-solid-svg-icons";

interface Iprops{
    isOpenMenu : boolean
    changeMenu : (event: React.MouseEvent<HTMLElement>) => void
}

const Menu = (props:Iprops) => {
    const myRef = useRef<HTMLDivElement>(null)
    const closeMenu = () =>{props.isOpenMenu = !props.isOpenMenu}
    const visibilityHidden = () =>{(myRef.current as HTMLElement).style.visibility = "hidden";}

    useEffect(() => {
        (myRef.current as HTMLElement).style.visibility = "visible";
        (myRef.current as HTMLElement).style.height = "calc(100vh - 40px)";
        (myRef.current as HTMLElement).style.backgroundColor = "calc(100vh - 40px)";
    }, []);



    return (
        <div className={styles.menu} ref={myRef}>
            <Navbar isOpenMenu={props.isOpenMenu} changeMenu={props.changeMenu} />
            <div className={styles.selectArea}>
                <div className={styles.icons}>
                    <div className={styles.line}></div>
                    <div className={styles.icon}><a href="https://github.com/joshua-legend"><FontAwesomeIcon icon={faGithub} /></a></div>
                    <div className={styles.icon}><a href="https://www.youtube.com/watch?v=dXpwL7cXcc8"><FontAwesomeIcon icon={faYoutube} /></a></div>
                    <div className={styles.icon}><a href="https://www.rocketpunch.com/@4d9a404a"><FontAwesomeIcon icon={faRocket} /></a></div>
                    <div className={styles.icon}><a href="mailto:iuttn123@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></div>
                </div>
                <div className={styles.article} onClick={props.changeMenu}><h1 className={styles.title}><Link to='/' onClick={closeMenu}>Home</Link></h1><p className={styles.description}>back to home page</p></div>
                <div className={styles.article} onClick={props.changeMenu}><h1 className={styles.title}><Link to='/portfolios' onClick={closeMenu}>Portfolios</Link></h1><p className={styles.description}>What portfolios do you have?</p></div>
                <div className={styles.article} onClick={props.changeMenu}><h1 className={styles.title}><Link to='/game' onClick={closeMenu}>Game</Link></h1><p className={styles.description}>Wanna play games?</p></div>
            </div>
        </div>
    );
};

export default Menu;
