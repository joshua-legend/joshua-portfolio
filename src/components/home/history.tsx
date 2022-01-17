import React, {MouseEventHandler, useState} from 'react';
import styles from './history.module.css'

const History = () => {

    const [history, setHistory] = useState([
        {
            id: `1`,
            img:`sejong.jpg`,
            title:`Sejong University`,
            p: `컴퓨터공학과와 일어일문학과를 학위 이수를 하였습니다. 운영체제, 자료구조, 데이터베이스, 알고리즘 등 수업을 이수하였습니다.`,
            a_tag:`http://www.sejong.ac.kr/`,
        },
        {
            id: `2`,
            img:`bside.jpg`,
            title:`Bsidesoft Company`,
            p: `프론트 엔드와 QA담당을 주로 하였습니다. 프로젝트는 코로나 백신 운반 프로젝트-BoundX를 하였고, 여러가지 프로젝트를 진행한 경험이 있습니다.`,
            a_tag:`https://www.bsidesoft.com/`
        },
        {
            id: `3`,
            img:`dreamcode.jpg`,
            title:`DreamCode online`,
            p: `프론트엔드에 흥미가 많이 생겨서 Online 강의 드림코드를 수업을 듣게 되었고, 이를 바탕으로 JS-TS-REACT 까지 공부하게 되었습니다.`,
            a_tag:`https://academy.dream-coding.com/courses/browser101`
        },
        {
            id: `4`,
            img:`academy.jpg`,
            title:`Bitcamp Academy`,
            p: `Back-end에 기본적으로 부족했던 부분을 공부하였고 Spring boot를 통해서 MVC패턴을 이해하게 되었고 프로젝트까지 진행하였습니다.`,
            a_tag:`https://www.bitcamp.co.kr/`
        },
    ]);

    const onTag = (tag:string)=>{window.open(tag);}

    return (
        <section className={styles.container}>
            <h1 className={styles.h1}>Programmer's History</h1>
            <div className={styles.wrap}>
                {history.map((obj,idx)=>(
                    <article key={idx} className={styles.article} onClick={()=>onTag(obj.a_tag)}>
                        <div className={styles.inner}>
                            <div className={styles.txt}>
                                <h2 className={styles.title}>{obj.title}</h2>
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
