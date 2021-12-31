import React, {useRef} from 'react';
import styles from './pagewrap.module.css'
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import Works from "../work/works";

interface Iprops{
    isOpenMenu : boolean
    changeMenu : (event: React.MouseEvent<HTMLElement>) => void
}

const Pagewrap = (props:Iprops) => {

    const pageRef = useRef<HTMLDivElement>(null)

    return (
        <div className={styles.pagewrap} ref={pageRef}>
            <Navbar isOpenMenu={props.isOpenMenu} changeMenu={props.changeMenu} />
            {/*<Page />*/}
            <Home />
            <Works/>
        </div>
    );
};

export default Pagewrap;
