import React, {createRef, useEffect, useRef} from 'react';
import styles from './menu.module.css'
import Navbar from "../navbar/navbar";

interface Iprops{
    IsOpenMenu : boolean
}

const Menu = (props:Iprops) => {

    const myRef = createRef<HTMLDivElement>()

    useEffect(() => {
        (myRef.current as HTMLElement).style.display = "block";
        (myRef.current as HTMLElement).style.visibility = "visible";
        (myRef.current as HTMLElement).style.height = "100vh";
    }, []);

    return (
        <div className={styles.menu} ref={myRef}>
            {/*<Navbar  />*/}
        </div>
    );
};

export default Menu;
