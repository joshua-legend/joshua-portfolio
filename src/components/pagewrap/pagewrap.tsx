import React, {useRef} from 'react';
import styles from './pagewrap.module.css'
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import {Route, Routes} from "react-router-dom";
import Portfolios from "../portfolios/portfolios";
import Game from "../game/game";

interface Iprops{
    isOpenMenu : boolean
    changeMenu : (event: React.MouseEvent<HTMLElement>) => void
}

const Pagewrap = (props:Iprops) => {

    const pageRef = useRef<HTMLDivElement>(null)
    return (
        <div className={styles.pagewrap} ref={pageRef}>
            <Navbar isOpenMenu={props.isOpenMenu} changeMenu={props.changeMenu} />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/portfolios' element={<Portfolios />}></Route>
                <Route path='/game' element={<Game />}></Route>
            </Routes>
        </div>
    );
};

export default Pagewrap;
