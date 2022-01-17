import React, {useEffect, useRef, useState} from 'react';
import styles from './select.module.css'
import Music from "./music";
import {CrazySuffle} from "../fields/music/CrazySuffle";

interface Iprops {
    change: () => void;
    select: (arg:any) => void;
}

const Select = (props:Iprops) => {

    const figures = useRef<HTMLElement>(null);
    const [music, setMusic] = useState([
        {id:`1`,album:`music1.jpg`,name:`Crazy Shuffle`,difficulty:`어려움`,class:new CrazySuffle},
        {id:`2`,album:`music2.jpg`,name:`DDD`,difficulty:`어려움`,class:undefined},
    ]);
    const explain = () =>{window.confirm(`ASKL에 오신것을 환영합니다. A,S,K,L SPACE 버튼을 이용하여 리듬에 맞추어 점수를 획득하는 게임입니다. 재밌게 즐겨주세요!`)}

    const deg = 360/(music.length);
    let i=0;
    useEffect(() => {
        const frame = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
        Array.from(frame).forEach((ele,num)=>{
            ele.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
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
                    <span>Dance rhythm Game</span><br/>
                    <button className={styles.button_explain} onClick={explain}>게임 설명!</button>
                    {music.map(obj=>(
                        <Music
                            id={obj.id}
                            album={obj.album}
                            difficulty={obj.difficulty}
                            name={obj.name}
                            class={obj.class}
                            change = {props.change}
                            select = {props.select}
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