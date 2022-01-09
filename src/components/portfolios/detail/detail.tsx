import React, {useState} from 'react';
import styles from './detail.module.css'
import * as All from "react-icons/all";

interface Iprops{
    change : (args:string) => void
    content : { link:string, img:string, title:string, tags:Array<string>, p:string }
}

const Detail = (props:Iprops) => {

    const changeContent = (what:string) =>{
        props.change(what);
    }

    return (
        <>
            <div className={styles.content} >
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
            <div className={styles.exit} onClick={()=>changeContent(`choice`)} >
                <h2>go to main</h2>
            </div>
        </>
    );
};

export default Detail;
