import React, {createRef, useEffect, useRef} from 'react';
import styles from './menu.module.css'
import Navbar from "../navbar/navbar";
import {AiFillGithub, AiFillYoutube, BiRocket, SiGmail} from "react-icons/all";

interface Iprops{
    isOpenMenu : boolean
    changeMenu : (event: React.MouseEvent<HTMLElement>) => void
}

const Menu = (props:Iprops) => {
    const myRef = useRef<HTMLDivElement>(null)
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
                <div className={styles.article}><h1 className={styles.title}>Home</h1><p className={styles.description}>back to home page</p></div>
                <div className={styles.article}><h1 className={styles.title}>Programming</h1><p className={styles.description}>What programming languages can you do?</p></div>
                <div className={styles.article}><h1 className={styles.title}>Work</h1><p className={styles.description}>Where did you work?</p></div>
                <div className={styles.article}><h1 className={styles.title}>Game</h1><p className={styles.description}>Let's play some games!</p></div>
            </div>
        </div>
    );
};

export default Menu;
