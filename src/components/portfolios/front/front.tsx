import React, {useState} from 'react';
import styles from './front.module.css'

interface Iprops{
    change : (args:string) => void
    target : (args:{link:string,img:string,title:string,tags:Array<string>,p:string,where:string}) => void
}

const Front = (props:Iprops) => {

    const [content, setContent] = useState([
        {id:`1`,link:`https://www.youtube.com/watch?v=wmllZkygDLc&t=46s`,img:`dream.png`,title:`그림드림`,tags:[`html.png`,`css.png`,`semantic.png`,`javascript.png`,`jquery.png`,`java.png`,`springboot.png`,`jpa.png`,`oracle.png`],p:`아마추어 그림 작가들이 자신의 그림을 판매하는 플랫폼입니다.`,where:`front`},
        {id:`2`,link:`https://greenie.slabasia.com/`,img:`greenie.png`,title:`Greenie`,tags:[`kotlin.png`,`html.png`,`css.png`,`ein.png`],p:`greenie 박스를 통해서 현재 코로나 백신 운반을 담당하는 플랫폼입니다.`,where:`front`},
        {id:`3`,link:`https://lovecheat.net/`,img:`lovecheat.png`,title:`LoveCheat`,tags:[`react.png`,`kotlin.png`,`html.png`,`css.png`],p:`이성간의 만남에서 상대방이 의심스러울 때, 그 사람에 관련해서 신상을 찾는 플랫폼입니다.`,where:`front`},
        {id:`4`,link:`https://www.bsidesoft.com/slabbluebasket/joshua/`,img:`marketcoco.png`,title:`Marketcoco`,tags:[`html.png`,`css.png`,`kotlin.png`],p:`현지 싱가폴에서 필요한 과일들을 마켓코코 플랫폼을 통해서 구하는 사이트입니다.`,where:`front`},
        {id:`5`,link:`https://joshua-legend.github.io/joshua-cafe/index.html`,img:`joshua-cafes.png`,title:`Joshua cafe`,tags:[`html.png`,`css.png`,`javascript.png`],p:`간단한 미니 프로젝트로 카페를 구성하였습니다.`,where:`front`},
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

export default Front;
