import React, {createRef, useEffect, useRef} from 'react';
import styles from './menu.module.css'

const Menu = (show:any) => {

    const myRef = createRef<HTMLDivElement>()

    useEffect(() => {
        (myRef.current as HTMLElement).style.visibility = "visible";
        (myRef.current as HTMLElement).style.height = "100vh";
        console.log((myRef.current as HTMLElement).style.height);
    }, []);


    return (
        <div className={styles.menu} ref={myRef}>
        </div>
    );
};

export default Menu;
