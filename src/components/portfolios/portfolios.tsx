import React, {useState} from 'react';


const Portfolios = () => {
    const [intro, setIntro] = useState([
        {
            id: "0",
            pageY: undefined,
            h1: `Hi! I'm Joshua`,
            tags: ['인문학도', '개발자', '인턴경험', '복수전공'],
            p: `안녕하세요, 프론트엔드 개발자를 꿈꾸는 조슈아 입니다. 세종대학교 컴퓨터 공학과를 졸업을 하였고 끝임없이 코드를 다듬고 유연하게 만들고 싶어하는 개발자 되는 것이 꿈입니다.`,
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
            <div>1l2j3lk12jlk321jkl313lj12lk3jl1k23</div>
        </>
    );
};

export default Portfolios;
