import React, {MouseEventHandler} from 'react';
import styles from './home.module.css'
import {AiOutlineStar, FaBirthdayCake} from "react-icons/all";

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
const Home_major = (props:Iprops) => {

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
          </div>
    );
};

export default Home_major;
