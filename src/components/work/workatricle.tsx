import React from 'react';
import styles from './workarticle.module.css'

interface Iprops {
    id:number,
    h1:string,
    p:string,
    img:string,
    reverse:boolean
}

const Workatricle = (props:Iprops) => {
    return (
        <>
            <article className={styles.article}>
                <section>
                    <h1 className={styles.h1}>{props.h1}</h1>
                    <p className={styles.p}>{props.p}</p>
                </section>
                <section>

                </section>
            </article>
        </>
    );
};
export default Workatricle;
