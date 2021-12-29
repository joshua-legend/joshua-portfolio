import React, {createRef} from 'react';
import styles from './pagewrap.module.css'
import Navbar from "../navbar/navbar";

interface Iprops{
    isOpenMenu : boolean
}

const Pagewrap = (props:Iprops) => {

    const pageRef = createRef<HTMLDivElement>()

    return (
        <div className={styles.pagewrap} ref={pageRef}>
            <Navbar isOpenMenu={props.isOpenMenu}  />
        </div>
    );
};

export default Pagewrap;
