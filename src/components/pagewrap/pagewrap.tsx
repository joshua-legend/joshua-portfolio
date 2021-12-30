import React, {createRef, MutableRefObject, useRef} from 'react';
import styles from './pagewrap.module.css'
import Navbar from "../navbar/navbar";

interface Iprops{
    isOpenMenu : boolean
    changeMenu : (event: React.MouseEvent<HTMLElement>) => void
}

const Pagewrap = (props:Iprops) => {

    const pageRef = useRef<HTMLDivElement>(null)

    return (
        <div className={styles.pagewrap} ref={pageRef}>
            <Navbar isOpenMenu={props.isOpenMenu} changeMenu={props.changeMenu} />
        </div>
    );
};

export default Pagewrap;
