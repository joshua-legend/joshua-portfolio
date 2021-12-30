import React, {createRef} from 'react';
import styles from './pagewrap.module.css'
import Navbar from "../navbar/navbar";

interface Iprops{
    isOpenMenu : boolean
    changeMenu : (event: React.MouseEvent<HTMLElement>) => void
}

const Pagewrap = (props:Iprops) => {

    const pageRef = createRef<HTMLDivElement>()

    return (
        <div className={styles.pagewrap} ref={pageRef}>
            <Navbar isOpenMenu={props.isOpenMenu} changeMenu={props.changeMenu} />
        </div>
    );
};

export default Pagewrap;
