import React from 'react';
import styles from './home.module.css'


interface Iprops {
    id:number,
    img:string,
    h1:string,
    p:string,
}
const Home_minor = (props:Iprops) => {
    return (
        <>
          <div className={styles.minor}>
              <section><img className={styles.minor_img} src={props.img} alt=""/></section>
              <section>
                  <h1 className={styles.minor_h1}>{props.h1}</h1>
                  <p className={styles.minor_p}>{props.p}</p>
              </section>
          </div>
            <hr className={styles.minor_hr}/>
        </>
    );
};
export default Home_minor;
