import * as React from 'react';
import styles from './navbar.module.css'
import {BiCoffeeTogo} from "react-icons/all";
import {useState} from "react";
import Menu from "../menu/menu";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const menuChange = () =>{setMenu(!menu)}

    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.menu} onClick={menuChange}>
                    <svg className={styles.cube} width="108" height="79" viewBox="0 0 108 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.cube_color} d="M42 58.43L74.58 77.24L107.16 58.43V20.81L74.58 2L42 20.81V58.43Z" fill="#66BFE6"/>
                        <path d="M1 58.43L33.58 77.24L66.16 58.43V20.81L33.58 2L1 20.81V58.43Z" stroke="#1D262D" strokeWidth="2" strokeMiterlimit="10"/>
                    </svg>
                    <div className={styles.font}>{menu ? 'close' : 'menu'}</div>
                </div>
                <div className={styles.logo}>
                    <span>Joshua</span>
                    <span><BiCoffeeTogo /></span>
                </div>
            </div>
            {menu && <Menu show="react"/>}
        </div>
    );
};

export default Navbar;
