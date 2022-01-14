import React, {useState} from 'react';
import styles from './detail.module.css'

interface Iprops{
    change : (args:string) => void
    content : { link:string, img:string, title:string, tags:Array<string>, p:string, where:string }
}

const Detail = (props:Iprops) => {

    const changeContent = (what:string) =>{props.change(what);}
    const gotoURL = (url:string) =>{window.open(url);}


    return (
        <>
            <div className={styles.content} onClick={()=>gotoURL(props.content.link)} >
                <img src={props.content.img} alt=""/>
                <h2 className={styles.title}>{props.content.title}</h2>
                <p className={styles.p}>{props.content.p}</p>
                <div className={styles.tags}>
                    <h3>Tools</h3>
                    <div>
                        {props.content.tags.map((value) => (
                            <img className={styles.icon} src={`${value}`} alt=""/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.exit} onClick={()=>changeContent(props.content.where)} >
                <h2>go to main</h2>
            </div>
        </>
    );
};

export default Detail;
