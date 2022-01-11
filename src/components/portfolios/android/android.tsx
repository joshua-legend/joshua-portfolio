import React, {useState} from 'react';
import styles from './android.module.css'

interface Iprops{
    change : (args:string) => void
    target : (args:{link:string,img:string,title:string,tags:Array<string>,p:string,where:string}) => void
}

const Android = (props:Iprops) => {

    const [content, setContent] = useState([
        {id:`1`,link:`https://www.youtube.com/watch?v=OIzG3LWAt9g&list=PL2VOYWsm57nyJimkOdJdeW47NZ5isXohs&index=1`,img:`boardgame.png`,title:`보드위키`,tags:[`java.png`,`android.png`],p:`보드게임 관련 위키 어플입니다.`,where:`android`},
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

export default Android;
