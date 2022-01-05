import React, {useState} from 'react';
import styles from './home.module.css'
import Intro from "./intro";
import History from "./history";
import Card from "./card";

type cards = `person` | `place`;

const Home = () => {
    const [intro, setIntro] = useState([
        {
            id: "0",
            pageY: undefined,
            h1: `Hi! I'm Joshua`,
            tags: ['인문학도', '개발자', '인턴경험', '복수전공'],
            p: `Lorem ipsum dolor sit amet, consectetur adipiscing elitm.`,
            cards: `person`,
            img: `joshua.png`,
            info: {
                name: `joshua`,
                sub: `front-end developer`,
                first: `Computer-Engineering BA`,
                last: `Japanese literature BA`
            }
        },
    ]);



    return (
        <>
            <span className={styles.scroll}>
                <span className={styles.text}>Scroll</span>
                <div className={styles.line}></div>
            </span>
            {intro.map(obj=>(
                <Intro
                    id={obj.id}
                    h1={obj.h1}
                    tags={obj.tags}
                    p={obj.p}
                    cards={obj.cards}
                    img={obj.img}
                    info={obj.info}
                />
            ))}
            <History />
            <Card />
        </>
    );
};

export default Home;
