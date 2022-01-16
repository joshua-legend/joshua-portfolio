import React, {useState} from 'react';
import styles from './chocie.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAndroid, faChrome} from "@fortawesome/free-brands-svg-icons";
import {faServer} from "@fortawesome/free-solid-svg-icons";

interface Iprops{
    change : (args:string) => void
}

const Choice = (props:Iprops) => {

    const changeContent = (what:string) =>{props.change(what);}

    return (
        <>
            <div className={styles.content} onClick={()=>changeContent(`front`)}>
                <p><FontAwesomeIcon icon={faChrome} /></p>
                <h2>Front-end</h2>
            </div>
            <div className={styles.content} onClick={()=>changeContent(`back`)}>
                <p><FontAwesomeIcon icon={faServer} /></p>
                <h2>Back-end</h2>
            </div>
            <div className={styles.content} onClick={()=>changeContent(`android`)}>
                <p><FontAwesomeIcon icon={faAndroid} /></p>
                <h2>Android</h2>
            </div>
        </>
    );
};

export default Choice;
