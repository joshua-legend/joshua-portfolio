import React, {useRef, useState} from 'react';
import styles from './portfolios.module.css'
import Choice from "./choice";
import Front from "./front/front";
import Detail from "./detail/detail";


const Portfolios = () => {

    const [openSection, setOpenSection] = useState(`choice`);
    const [detailTarget, setTarget] = useState({link:``,img:``,title:``});

    const onChange = (what:string) =>{setOpenSection(what);}
    const onTarget = (what:{link:string,img:string,title:string})=>{setTarget(what);}


    const changeCircle = () =>{(document.getElementById(`circle`) as HTMLElement).style.width = "75%"}



    return (
        <>
            <main className={styles.wrap}>
                <video src="bg.mp4" loop autoPlay muted></video>
                <section className={styles.circle} id="circle">
                    <article className={styles.face}>
                        <div className={styles.inner}>
                            {openSection ==`choice`&& <Choice change={onChange} /> }
                            {openSection ==`front` && <Front change={onChange} target={onTarget} changeCircle={changeCircle}/>}
                            {openSection ==`detail` && <Detail change={onChange} content={detailTarget} changeCircle={changeCircle} />}
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
