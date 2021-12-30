import React from 'react';
import styles from './home.module.css'

const Home = () => {
    return (
        <>
          <div className={styles.home}>
              <section className={styles.introduce}>
                  <h1 className={styles.name}>Hi! I'm <b>Joshua</b></h1>
                  <p className={styles.description}>I'm an independent creative developer from Korea.</p>
              </section>
              <section className={styles.photo}></section>
          </div>
        </>
    );
};

export default Home;
