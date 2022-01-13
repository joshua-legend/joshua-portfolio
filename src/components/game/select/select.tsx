import React, {useEffect, useRef, useState} from 'react';
import styles from './select.module.css'
import Music from "./music";

interface Iprops {
    change: () => void;
}

const Select = (props:Iprops) => {

    const figures = useRef<HTMLElement>(null);
    const [music, setMusic] = useState([
        {id:`1`,album:`music1.jpg`,name:`Crazy Shuffle`,hard:`어려움`},
        {id:`2`,album:`music2.jpg`,name:`DDD`,hard:`어려움`},
    ]);

    const deg = 360/(music.length);
    let i=0;
    useEffect(() => {
        const frame = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
        Array.from(frame).forEach((ele,num)=>{
            ele.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
            console.log(ele.style.transform);
            console.log(num);
            if(num != music.length-1) i++;

        })
    },[figures])

    const changeLeft = (event:any) =>{
        const frame = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
        Array.from(frame).forEach((ele,num)=>{
            ele.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
            if(num != music.length-1) i--;
        })
    }
    const changeRight = (event:any) =>{
        const frame = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
        Array.from(frame).forEach((ele,num)=>{
            ele.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
            if(num != music.length-1) i++;
        })
    }

    return (
        <>
            <figure className={styles.figure} ref={figures}>
                <h1>
                    <strong>ASKL Space</strong><br/>
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