import React, {MouseEventHandler, useState} from 'react';
import styles from './card.module.css'

const Card = () => {

    const [card, setCard] = useState([
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
    ]);
    return (
        <section className={styles.inner}>
            <h1 className={styles.h1}>What can you do ?</h1>
            <div className={styles.wrap}>
                <article className={styles.article}>

                </article>
            </div>
        </section>
    );
};

export default Card;
