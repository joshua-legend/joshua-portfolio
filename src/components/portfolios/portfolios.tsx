import React, {useRef, useState} from 'react';
import styles from './portfolios.module.css'
import Choice from "./choice";
import Front from "./front/front";
import Detail from "./detail/detail";


const Portfolios = () => {

    const [openSection, setOpenSection] = useState(`choice`);
    const [detailTarget, setTarget] = useState({link:``,img:``,title:``,tags:[``],p:``});

    const onChange = (what:string) =>{setOpenSection(what);}
    const onTarget = (what:{link:string,img:string,title:string,tags:string[],p:string})=>{setTarget(what);}

    return (
        <>
            <main className={styles.wrap}>
                <video src="bg.mp4" loop autoPlay muted></video>
                <section className={styles.circle} id="circle">
                    <article className={styles.face}>
                        <div className={styles.inner}>
                            {openSection ==`choice`&& <Choice change={onChange} /> }
                            {openSection ==`front` && <Front change={onChange} target={onTarget}/>}
                            {openSection ==`detail`  && <Detail change={onChange} content={detailTarget} />}
                            {/*{openSection ==`front` && <Front change={onchange}/>}*/}
                            {/*{openSection ==`front` && <Front change={onchange}/>}*/}

                        </div>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Portfolios;
