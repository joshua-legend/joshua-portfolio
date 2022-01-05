import React, {MouseEventHandler, useState} from 'react';
import styles from './history.module.css'
import Intro from "./intro";

const History = () => {

    const [history, setHistory] = useState([
        {
            id: `1`,
            img:`sejong.png`,
            title:`sejong University`,
            p: `세종대학교 컴퓨터공학과 졸업`
        },
        {
            id: `2`,
            img:`bside.png`,
            title:`Bside soft`,
            p: `프론트엔드 6개월간 수료`
        },
        {
            id: `3`,
            img:`dreamcode.png`,
            title:`Dream Code ellie`,
            p: `드림코드 짱짱걸`
        },
        {
            id: `3`,
            img:`academy.jpg`,
            title:`Bitcamp Academy`,
            p: `비트캠프 6개월수료`
        },
    ]);


    return (
        <section className={styles.inner}>
            <h1 className={styles.h1}>Programmer's History</h1>
            <div className={styles.wrap}>
                {history.map(obj=>(
                    <article className={styles.article}>
                        <div className={styles.pic}>
                            <img className={styles.img} src={obj.img} alt=""/>
                        </div>
                        <h2 className={styles.h2}><a href="#">{obj.title}</a></h2>
                        <p className={styles.p}>{obj.p}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default History;
