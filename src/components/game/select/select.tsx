import React, {useEffect, useRef, useState} from 'react';
import styles from './select.module.css'
import Music from "./music";

interface Iprops {
    change: () => void;
}

const Select = (props:Iprops) => {

    const figures = useRef<HTMLElement>(null);
    const deg = 360/4;
    let i=0;
    useEffect(() => {
        const frame = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
        Array.from(frame).forEach((ele)=>{
            ele.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
            i++;
        })
    },[figures])
    const changeLeft = (event:any) =>{
        const frame = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
        Array.from(frame).forEach((ele)=>{
            i--;
            ele.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
        })
    }
    const changeRight = (event:any) =>{
        const frame = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
        Array.from(frame).forEach((ele)=>{
            i++;
            ele.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
        })
    }

    const [music, setMusic] = useState([
        {id:`1`,album:`music1.jpg`,name:`Crazy Shuffle`,hard:`어려움`},
        {id:`2`,album:`music2.jpg`,name:`DDD`,hard:`어려움`},
        {id:`3`,album:`music2.jpg`,name:`DDD`,hard:`어려움`},
        {id:`4`,album:`music2.jpg`,name:`DDD`,hard:`어려움`}
    ]);


    return (
        <>
            <figure className={styles.figure} ref={figures}>
                <h1>
                    <strong>DanceRush</strong><br/>
                    <span>Dance rhythm Game</span>
                    {music.map(obj=>(
                        <Music
                            id={obj.id}
                            album={obj.album}
                            hard={obj.hard}
                            name={obj.name}
                            change = {props.change}
                        />
                    ))}
                    <div className={styles.btnPrev} onClick={changeLeft}><span>Prev MUSIC</span></div>
                    <div className={styles.btnNext} onClick={changeRight}><span>Next MUSIC</span></div>
                </h1>
            </figure>
        </>
    );
};

export default Select;