import React, {useState} from 'react';
import styles from './back.module.css'

interface Iprops{
    change : (args:string) => void
    target : (args:{link:string,img:string,title:string,tags:Array<string>,p:string,where:string}) => void
}

const Back = (props:Iprops) => {

    const [content, setContent] = useState([
        {id:`1`,link:`https://www.youtube.com/watch?v=wmllZkygDLc&t=46s`,img:`dream.png`,title:`그림드림`,tags:[`html.png`,`css.png`,`semantic.png`,`javascript.png`,`jquery.png`,`java.png`,`springboot.png`,`jpa.png`,`oracle.png`],p:`아마추어 그림 작가들이 자신의 그림을 판매하는 플랫폼입니다.`,where:`back`},
        {id:`2`,link:`https://greenie.slabasia.com/`,img:`greenie.png`,title:`Greenie`,tags:[`kotlin.png`,`html.png`,`css.png`,`ein.png`],p:`greenie 박스를 통해서 현재 코로나 백신 운반을 담당하는 플랫폼입니다.`,where:`back`},
        {id:`3`,link:`http://llht.site/`,img:`lolhunters.png`,title:`Lolhunters`,tags:[`python.png`,`javascript.png`,`jquery.png`,`html.png`,`css.png`],p:`리그 오브 레전드 게임에서 악질유저들의 관련 신고 및 확인 하는 사이트 입니다.(사이트 일시폐지)`,where:`back`},
        {id:`4`,link:`https://www.youtube.com/watch?v=MYM748wdcm0&list=PL2VOYWsm57nyJimkOdJdeW47NZ5isXohs&index=3`,img:`city.png`,title:`CityTycoon`,tags:[`java.png`],p:`자바 콘솔로 만든 게임입니다. 도시에서 원하는 곳에 상점을 차려 일정 금액을 달성하면 클리어하는 게임입니다.`,where:`back`},
    ]);

    const changeContent = (what:string,content:{link:string,img:string,title:string,tags:Array<string>,p:string,where:string}) =>{
        props.change(what);
        props.target(content);
    }

    return (
        <>
        {content.map((obj,idx)=>(
            <div className={styles.content} onClick={()=>changeContent(`detail`,content[idx])}>
                {obj.img && <img src={obj.img} alt=""/>}
                <article className={styles.article}>
                    <h2 className={styles.title}>{obj.title}</h2>
                </article>
            </div>
        ))}
            <div className={styles.content} onClick={()=>changeContent(`choice`,{link:``,img:``,title:``,tags:[],p:``,where:``})} >
                <article className={styles.article}>
                    <h2 className={styles.title}>Return to main</h2>
                </article>
            </div>
        </>
    );
};

export default Back;
