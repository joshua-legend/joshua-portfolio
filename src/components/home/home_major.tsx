import React from 'react';
import styles from './home.module.css'
import {AiOutlineStar, FaBirthdayCake} from "react-icons/all";

interface Iprops {
    id:number,
    h1:string,
    tags:string[],
    p:string,
    img:string,
    reverse:boolean
}
const Home_major = (props:Iprops) => {
    const a = (event: any) =>{

    }

    return (
          <div className={styles.major} onLoad={a}>
              <section className={styles.introduce}>
                  <h1 className={styles.h1}>{props.h1}</h1>
                  <hr className={styles.hr}/>
                  <aside className={styles.tags}>{props.tags.map(x=>`# ${x} `)}</aside>
                  <p className={styles.p}>{props.p}</p>
              </section>
              <section className={styles.card}>
                  <nav className={styles.menu}>
                      <a href="#"><AiOutlineStar /></a>
                  </nav>
                  <article className={styles.profile}>
                      <img src={props.img} alt=""/>
                      <h1>Joshua</h1>
                      <h2>Front-end Developer</h2>
                      <a className={styles.btnView} href="#">View More</a>
                  </article>
                  {/*<ul className={styles.contact}>*/}
                  {/*    <li>*/}
                  {/*        <FaBirthdayCake />*/}
                  {/*        <span>1993.04.04</span>*/}
                  {/*    </li>*/}
                  {/*    <li></li>*/}
                  {/*</ul>*/}
              </section>
          </div>
    );
};

export default Home_major;
