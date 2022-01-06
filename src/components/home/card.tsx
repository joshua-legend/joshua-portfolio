import React, {MouseEventHandler, useState} from 'react';
import styles from './card.module.css'

const Card = () => {

    const [card, setCard] = useState([
        {
            id: `1`,
            img:`javascript.png`,
            title:`Javascript`,
            p: `현재 프론트엔드에 매료에 빠져서 자바스크립트 위주로 프로젝트 진행하고 있습니다.`
        },
        {
            id: `2`,
            img:`java.png`,
            title:`JAVA`,
            p: `Java로 공부를 시작을 했으며, Swing, Android, Spring Boot까지 다뤄 봤습니다.`
        },
        {
            id: `3`,
            img:`react.png`,
            title:`React`,
            p: `React 라이브러리를 이용하여 현 포트폴리오 페이지를 제작하였습니다.`
        },
        {
            id: `4`,
            img:`typescript.png`,
            title:`Typescript`,
            p: `Typescript 기반으로 현 포르폴리오 페이지를 제작하였습니다.`
        },
        {
            id: `5`,
            img:`intellij.png`,
            title:`Intellij`,
            p: `Intellij를 이용하여 다양한 프로젝트를 진행하였습니다.`
        },
        {
            id: `6`,
            img:`git.png`,
            title:`Git`,
            p: `git을 통해서 주기적으로 프로젝트 관리를 하였습니다.`
        },
        {
            id: `7`,
            img:`notion.png`,
            title:`Notion`,
            p: `Notion을 통해서 문서관리를 하였습니다.`
        },
        {
            id: `8`,
            img:`figma.png`,
            title:`Figma`,
            p: `Figma를 통해서 와이어프레임을 제작하였고, 다양하게 활용하였습니다.`
        },
    ]);
    return (
        <section className={styles.inner}>
            <h1 className={styles.h1}>What can you do ?</h1>
            <div className={styles.wrap}>
                {card.map(obj=>(
                    <article className={styles.article}>
                        <section className={styles.card}>
                            <h2>{obj.title}</h2>
                            <p>{obj.p}</p>
                        </section>
                        <img className={styles.card_img} src={obj.img} alt=""/>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Card;
