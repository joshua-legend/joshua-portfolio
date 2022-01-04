import React, {useState} from 'react';
import Home_major from "./home_major";
import Home_minor from "./home_minor";
import styles from './home.module.css'

const Home = () => {
    const [major, setMajor] = useState([
        {id:"0",pageY:undefined,h1:`Hi! I'm Joshua`,tags:['인문학도','개발자','인턴경험','복수전공'],p:`Lorem ipsum dolor sit amet, consectetur adipiscing elitm sunt in culpa qui officia deserunt mollit anim id est laborum.`,img:`joshua.png`,
            info:{
                name: `joshua`,
                sub: `front-end developer`,
                first: `Computer-Engineering BA`,
                last: `Japanese literature BA`
            }},
        {id:"1",pageY:undefined,h1:`Computer science Bachelor`,tags:['인문학도','개발자','인턴경험','복수전공'],p:`C언어 기반으로부터 공부를 시작을 하였고, 기초적인 전공지식과 정보처리기사를 바탕으로 CS지식을 습득하였습니다.`,img:`university.png`,
            info:{
                name: `sejong-university`,
                sub: `japanese & computer`,
            }},
        {id:"2",pageY:undefined,h1:`Bsidesoft Internship`,tags:['인문학도','개발자','인턴경험','복수전공'],p:`주로 Front와 QA를 진행을 하였고 대표적으로 코로나 백신 운반 프로젝트를 참여했습니다.`,img:`company.png`,
            info:{
                name: `bsidesoft`,
                sub: `front-end developer`,
            }},
    ]);

    const [minor, setMinor] = useState([
        {id:0,h1:`세종대학교 컴퓨터공학과 전공자`,p:`asd`,img:`javascript.png`},
        {id:1,h1:`세종대학교 컴퓨터공학과 전공자`,p:`asd`,img:`javascript.png`},
        {id:2,h1:`비사이드소프트 6개월 인턴 경험`,p:`qwe`,img:`javascript.png`},
    ]);

    return (
        <>
            <span className={styles.scroll}>
                <span className={styles.text}>Scroll</span>
                <div className={styles.line}></div>
            </span>
            {major.map(obj=>(
                <Home_major
                    id={obj.id}
                    h1={obj.h1}
                    tags={obj.tags}
                    p={obj.p}
                    img={obj.img}
                    info={obj.info}
                />
            ))}
            {minor.map(obj=>(
                <Home_minor
                    id={obj.id}
                    h1={obj.h1}
                    p={obj.p}
                    img={obj.img}
                />
            ))}
        </>
    );
};

export default Home;
