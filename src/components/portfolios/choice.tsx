import React, {useState} from 'react';
import styles from './chocie.module.css'
// import {AiFillAndroid, FaServer, SiGooglechrome} from "react-icons/all";

interface Iprops{
    change : (args:string) => void
}

const Choice = (props:Iprops) => {

    const changeContent = (what:string) =>{props.change(what);}

    return (
        <>
            <div className={styles.content} onClick={()=>changeContent(`front`)}>
                <p>123</p>
                <h2>Front-end</h2>
            </div>
            <div className={styles.content} onClick={()=>changeContent(`back`)}>
                <p>123</p>
                <h2>Back-end</h2>
            </div>
            <div className={styles.content} onClick={()=>changeContent(`android`)}>
                <p>123</p>
                <h2>Android</h2>
            </div>
        </>
    );
};

export default Choice;
