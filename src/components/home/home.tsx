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
            tags: ['세종대 컴공', '프론트엔드', '인턴경험', '복수전공'],
            p: `안녕하세요, 전문 프론트엔드가 되고 싶은 조슈아 입니다.\n끝임없이 코드를 유연하고 확장성있게 만들고 싶어하고,\n막힘을 오히려 좋아하는 개발자입니다.`,
            cards: `person`,
            img: `joshua.png`,
            info: {
                name: `Joshua`,
                sub: `Front-end developer`,
                first: `Computer-Engineering BA`,
                last: `Japanese literature BA`
            }
        },
    ]);
    return (
        <>
            {intro.map((obj,idx)=>(
                <Intro
                    key={idx}
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
