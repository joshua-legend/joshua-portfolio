import React, {MouseEventHandler, useState} from 'react';
import styles from './card.module.css'
import events from "node:events";

const Card = () => {

    const [card, setCard] = useState([
        {
            id: `1`,
            color: `#FFD600`,
            img:`javascript.png`,
            title:`Javascript`,
            p: `현재 프론트엔드에 매료에 빠져서 자바스크립트 위주로 프로젝트 진행하고 있습니다.`
        },
        {
            id: `2`,
            color: `#DE8E2F`,
            img:`java.png`,
            title:`JAVA`,
            p: `Java로 공부를 시작을 했으며, Swing, Android, Spring Boot까지 다뤄 봤습니다.`
        },
        {
            id: `3`,
            color: `#5ADAFD`,
            img:`react.png`,
            title:`React`,
            p: `React 라이브러리를 이용하여 현 포트폴리오 페이지를 제작하였습니다.`
        },
        {
            id: `4`,
            color: `#3178C6`,
            img:`typescript.png`,
            title:`Typescript`,
            p: `Typescript 기반으로 현 포르폴리오 페이지를 제작하였습니다.`
        },
        {
            id: `5`,
            color:`#8BC34A`,
            img:`spring.png`,
            title:`Spring Boot`,
            p: `Spring boot를 이용하여 MVC 패턴으로 서버 작업 진행하였습니다.`
        },
        {
            id: `6`,
            color:`#F4511E`,
            img:`git.png`,
            title:`Git`,
            p: `git을 통해서 주기적으로 프로젝트 관리를 하였습니다.`
        },
        {
            id: `7`,
            color: `#E91E63`,
            img:`intellij.png`,
            title:`Intellij`,
            p: `Intellij를 이용하여 다양한 프로젝트를 진행하였습니다.`
        },
        {
            id: `8`,
            color: `#D80027`,
            img:`japan.png`,
            title:`Japanese`,
            p: `JNPT N1을 취득하였고, 일어일문학과를 전공하였습니다.`
        },

        {
            id: `9`,
            color: `#0052B4`,
            img:`english.png`,
            title:`English`,
            p: `TOEIC 910점 취득하였고, 일반적인 회화가 가능합니다.`
        },
    ]);

    const buttonMouseOverHandler = (event: React.MouseEvent<HTMLElement>) => {
        const article: HTMLElement = event.currentTarget;
        article.style.backgroundColor = event.currentTarget.getAttribute('data-color') as string;
        console.log(event.currentTarget.getAttribute('data-color') as string)
    };

    const buttonMouseOutHandler = (event: React.MouseEvent<HTMLElement>) => {
        const article: HTMLElement = event.currentTarget;
        article.style.backgroundColor = "white";
    };


    return (
        <section className={styles.inner}>
            <h1 className={styles.h1}>What can you do ?</h1>
            <div className={styles.wrap}>
                {card.map(obj=>(
                    //style={{backgroundImage:`url(/${obj.img})`}}
                    <article data-color={obj.color} className={styles.article} onMouseOver={buttonMouseOverHandler} onMouseOut={buttonMouseOutHandler}>
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
