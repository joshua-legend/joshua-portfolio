import React, {MouseEventHandler, useState} from 'react';
import styles from './history.module.css'
import Intro from "./intro";

const History = () => {

    const [history, setHistory] = useState([
        {
            id: `1`,
            img:`sejong.jpg`,
            title:`Sejong University`,
            p: `컴퓨터공학과와 일어일문학과를 학위 이수를 하였습니다. 운영체제, 자료구조, 데이터베이스, 알고리즘 등 수업을 이수하였습니다.`
        },
        {
            id: `2`,
            img:`bside.jpg`,
            title:`Bsidesoft Company`,
            p: `프론트엔드 6개월간 수료`
        },
        {
            id: `3`,
            img:`dreamcode.jpg`,
            title:`DreamCode online`,
            p: `드림코드 짱짱걸`
        },
        {
            id: `4`,
            img:`academy.jpg`,
            title:`Bitcamp Academy`,
            p: `비트캠프 6개월수료`
        },
    ]);
    return (
        <section className={styles.container}>
            <h1 className={styles.h1}>Programmer's History</h1>
            <div className={styles.wrap}>
                {history.map(obj=>(
                    <article className={styles.article}>
                        <div className={styles.inner}>
                            <div className={styles.txt}>
                                <h2>{obj.title}</h2>
                                <p >{(obj.p)}</p>
                            </div>
                            <figure>
                                <img src={obj.img} alt=""/>
                            </figure>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
//style={{backgroundImage:`url(/${obj.img})`}}
export default History;
