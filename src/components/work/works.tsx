import React, {useState} from 'react';
import styles from './works.module.css'
import Workatricle from "./workatricle";


const Works = () => {
    const [article, setArticle] = useState([
        {id:1,h1:`저는 세종대학교 컴퓨터공학과 전공자 입니다.`,p:`C언어 기반으로부터 공부를 시작을 하였고, 기초적인 전공지식과 정보처리기사를 바탕으로 CS지식을 습득하였습니다.`,img:``,reverse:false},
        {id:2,h1:`비사이드소프트에서 6개월 인턴 경험이 있습니다.`,p:`주로 Front와 QA를 진행을 하였고 대표적으로 코로나 백신 운반 프로젝트를 참여했습니다.`,img:``,reverse:true},
        {id:3,h1:`b`,p:`3`,img:``,reverse:false},
    ]);
    return (
        <>
            <div className={styles.works}>
                {article.map(obj=>(
                    <Workatricle
                        id={obj.id}
                        h1={obj.h1}
                        p={obj.p}
                        img={obj.img}
                        reverse={obj.reverse}
                    />
                ))}
            </div>
        </>
    );
};
export default Works;
