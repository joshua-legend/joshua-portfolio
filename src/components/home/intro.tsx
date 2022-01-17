import React, {MouseEventHandler} from 'react';
import styles from './intro.module.css'

interface Iprops {
    id:string,
    // findPageY:any,
    h1:string,
    tags:string[],
    p:string,
    cards:string,
    img:string,
    info:any
}
const Intro = (props:Iprops) => {

    const getY = (e:any) =>{
        // props.findPageY((e.nativeEvent.path[3] as HTMLDivElement).getBoundingClientRect().y-20);
    }

    return (
          <div id={props.id} className={styles.major} onLoad={getY}>
              <section className={styles.introduce}>
                  <h1 className={styles.h1}>{props.h1}</h1>
                  <hr className={styles.hr}/>
                  <aside className={styles.tags}>{props.tags.map(x=>`# ${x} `)}</aside>
                  <p className={styles.p}>{props.p}</p>
              </section>
              <section className={styles.card}>
                  <nav className={styles.menu}>
                  </nav>
                  <article className={styles.profile}>
                      <img src={props.img} alt=""/>
                      <h1>{props.info.name}</h1>
                      <h2>{props.info.sub}</h2>
                      <a className={styles.btnView}>전수효 93년생 남</a>
                  </article>
                  <ul className={styles.contact}>
                      <li>
                          <span>{props.info.first}</span>
                      </li>
                      <li>
                          <span>{props.info.last}</span>
                      </li>
                  </ul>
              </section>
          </div>
    );
};

export default Intro;
