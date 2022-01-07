import React, {useState} from 'react';
import styles from './portfolios.module.css'
import Choice from "./choice";
import Front from "./front/front";

const Portfolios = () => {

    const [openSection, setOpenSection] = useState(`choice`);

    const onchange = (what:string) =>{setOpenSection(what);}


    return (
        <>
            <main className={styles.wrap}>
                <video src="bg.mp4" loop autoPlay muted></video>
                <section className={styles.circle}>
                    <article className={styles.face}>
                        <div className={styles.inner}>
                            {openSection ==`choice`&& <Choice change={onchange} /> }
                            {openSection ==`front` && <Front change={onchange}/>}
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Portfolios;
