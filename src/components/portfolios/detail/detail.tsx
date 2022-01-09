import React, {useState} from 'react';
import styles from './detail.module.css'

interface Iprops{
    change : (args:string) => void
    changeCircle: (args:boolean) => void
    content : { link:string, img:string, title:string }
}

const Detail = (props:Iprops) => {

    const changeContent = (what:string) =>{
        props.change(what);
        props.changeCircle(true)
    }

    return (
        <>
            <div className={styles.content} >
                <img src={props.content.img} alt=""/>
                <article>
                    <h2 className={styles.title}>{props.content.title}</h2>
                </article>
            </div>
            <div onClick={()=>changeContent(`choice`)} >
                <h2 className={styles.title}>go to main</h2>
            </div>
        </>
    );
};

export default Detail;
