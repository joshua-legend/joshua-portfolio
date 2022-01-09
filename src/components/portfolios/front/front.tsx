import React, {useState} from 'react';
import styles from './front.module.css'

interface Iprops{
    change : (args:string) => void
    target : (args:{link:string,img:string,title:string,tags:Array<string>,p:string}) => void
}

const Front = (props:Iprops) => {

    const [content, setContent] = useState([
        {id:`1`,link:`https://www.youtube.com/watch?v=wmllZkygDLc&t=46s`,img:`dream.png`,title:`그림드림`,tags:[`html.png`,`css.png`,`Semantic-UI`,`javascript.png`,`JQuery`,`JAVA`,`Spring Boot`,`JPA`,`Oracle`],p:`아마추어 그림 작가들이 자신의 그림을 판매하는 플랫폼입니다.`},
        {id:`2`,link:`https://greenie.slabasia.com/`,img:`greenie.png`,title:`Greenie`,tags:[`Kotlin`,`HTML`,`CSS`],p:`greenie 박스를 통해서 현재 코로나 백신 운반을 담당하는 플랫폼입니다.`},
        {id:`3`,link:`https://lovecheat.net/`,img:`lovecheat.png`,title:`LoveCheat`,tags:[`React`,`Kotlin`,`HTML`,`CSS`],p:`이성간의 만남에서 상대방이 의심스러울 때, 그 사람에 관련해서 신상을 찾는 플랫폼입니다.`},
        {id:`4`,link:`https://www.bsidesoft.com/slabbluebasket/joshua/`,img:`marketcoco.png`,title:`Marketcoco`,tags:[`HTML`,`CSS`,`Kotlin`],p:`현지 싱가폴에서 필요한 과일들을 마켓코코 플랫폼을 통해서 구하는 사이트입니다.`},
        {id:`5`,link:`https://joshua-legend.github.io/joshua-cafe/index.html`,img:`joshua-cafes.png`,title:`Joshua cafe`,tags:[`HTML`,`CSS`],p:`간단한 미니 프로젝트로 카페를 구성하였습니다.`},
    ]);

    const changeContent = (what:string,content:{link:string,img:string,title:string,tags:Array<string>,p:string}) =>{
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
            <div className={styles.content} onClick={()=>changeContent(`choice`,{link:``,img:``,title:``,tags:[],p:``})} >
                <article className={styles.article}>
                    <h2 className={styles.title}>Return to main</h2>
                </article>
            </div>
        </>
    );
};

export default Front;
