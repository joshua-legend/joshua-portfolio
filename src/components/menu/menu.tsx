import React, {createRef, useEffect, useRef} from 'react';
import styles from './menu.module.css'
import Navbar from "../navbar/navbar";
import {AiFillGithub, AiFillYoutube, BiRocket, SiGmail} from "react-icons/all";
import {Link} from "react-router-dom";

interface Iprops{
    isOpenMenu : boolean
    changeMenu : (event: React.MouseEvent<HTMLElement>) => void
}

const Menu = (props:Iprops) => {
    const myRef = useRef<HTMLDivElement>(null)
    const closeMenu = () =>{
        props.isOpenMenu = !props.isOpenMenu
    }

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
                    <div className={styles.icon}><AiFillYoutube/></div>
                    <div className={styles.icon}><AiFillGithub /></div>
                    <div className={styles.icon}><BiRocket /></div>
                    <div className={styles.icon}><SiGmail /></div>
                </div>
                <div className={styles.article}><h1 className={styles.title}><Link to='/' onClick={closeMenu}>Home</Link></h1><p className={styles.description}>back to home page</p></div>
                <div className={styles.article}><h1 className={styles.title}><Link to='/portfolios' onClick={closeMenu}>Portfolios</Link></h1><p className={styles.description}>What portfolios do you have?</p></div>
                <div className={styles.article}><h1 className={styles.title}>Game</h1><p className={styles.description}>Wanna play games?</p></div>
                <div className={styles.article}><h1 className={styles.title}>Game</h1><p className={styles.description}>Let's play some games!</p></div>
            </div>
        </div>
    );
};

export default Menu;
