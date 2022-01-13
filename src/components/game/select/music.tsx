import React, {useEffect, useRef} from 'react';
import styles from "./music.module.css";
import {Link} from "react-router-dom";

interface Iprops {
    id:string,
    album:string,
    name:string,
    hard:string,
    change:()=>void,
}


const Music = (props:Iprops) => {

    const section = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (section.current as HTMLDivElement).style.backgroundImage = `url('${props.album}')`;
    },[section])

    return (
        <>
            <section className={styles.music}>
                <article>
                    <div className={styles.inner}>
                        <div ref={section} className={styles.pic}>
                            <div className={styles.dot}></div>
                        </div>
                        <div className={styles.txt}>
                            <h2>{props.name}</h2>
                            <li>{props.hard}</li>
                            <button className={styles.button} onClick={props.change}>Start!</button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Music;
