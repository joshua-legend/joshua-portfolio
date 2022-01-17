import * as React from 'react';
import styles from './navbar.module.css'
import {useEffect, useRef, useState} from "react";

interface Iprops{
    isOpenMenu : boolean
    changeMenu : (event: React.MouseEvent<HTMLElement>) => void
}

const Navbar = (props:Iprops) => {

    const navbarRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const {isOpenMenu,changeMenu} = props;

    const [clicked, setClicked] = useState(false);
    const click = () =>{setClicked(true)}
    useEffect(() => {
        if(isOpenMenu){(navbarRef.current as HTMLElement).style.position = "inherit";}
    }, []);


    return (
        <>
            <div className={styles.navbar} ref={navbarRef}>
                <div className={styles.menu} onClick={(event) => { changeMenu(event); click();}} >
                    <svg className={styles.cube} width="108" height="79" viewBox="0 0 108 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.cube_color} d="M42 58.43L74.58 77.24L107.16 58.43V20.81L74.58 2L42 20.81V58.43Z" fill="#66BFE6"/>
                        <path d="M1 58.43L33.58 77.24L66.16 58.43V20.81L33.58 2L1 20.81V58.43Z" stroke="#1D262D" strokeWidth="2" strokeMiterlimit="10"/>
                    </svg>
                    <div className={styles.font} ref={menuRef}>{isOpenMenu ? 'close' : 'menu'}</div>
                </div>
                <div className={styles.logo}>
                    <div>Joshua Portfolio</div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
