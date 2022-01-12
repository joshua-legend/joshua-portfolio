import React, {useEffect, useRef, useState} from 'react';
import {Hero} from "./Hero";
import {Enemy} from "./Enemy";
import styles from "./gamefiled.module.css"
import {Line} from "./line";

const Gamefield = () => {


    const canvasRef = useRef<HTMLCanvasElement>(null);
    const aKey = useRef<HTMLDivElement>(null);
    const sKey = useRef<HTMLDivElement>(null);
    const spaceKey = useRef<HTMLDivElement>(null);
    const kKey = useRef<HTMLDivElement>(null);
    const lKey = useRef<HTMLDivElement>(null);

    document.addEventListener('keyup',ev => {
        (aKey.current as HTMLDivElement).style.backgroundColor='#1899D6';
        (sKey.current as HTMLDivElement).style.backgroundColor='#1899D6';
        (spaceKey.current as HTMLDivElement).style.backgroundColor='#1899D6';
        (kKey.current as HTMLDivElement).style.backgroundColor='#1899D6';
        (lKey.current as HTMLDivElement).style.backgroundColor='#1899D6';
    })

    document.addEventListener('keydown',ev => {
        if(ev.key==="a"||ev.key==="A")
            (aKey.current as HTMLDivElement).style.backgroundColor='#f8bbd0';
        if(ev.key==="s"||ev.key==="S")
            (sKey.current as HTMLDivElement).style.backgroundColor='#f8bbd0';
        if(ev.keyCode===32)
            (spaceKey.current as HTMLDivElement).style.backgroundColor='#f8bbd0';
        if(ev.key==="k"||ev.key==="K")
            (kKey.current as HTMLDivElement).style.backgroundColor='#f8bbd0';
        if(ev.key==="l"||ev.key==="L")
            (lKey.current as HTMLDivElement).style.backgroundColor='#f8bbd0';
        }
    )


    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const fieldWidth = window.innerWidth * 0.65;
        const fieldHeight = window.innerHeight * 0.5;
        canvas.width = fieldWidth;
        canvas.height = fieldHeight;
        canvas.style.backgroundImage = "url('cyber.jpg')";
        canvas.style.backgroundSize = "cover";
        const ctx = canvas.getContext(`2d`) as CanvasRenderingContext2D;



        function collaspe(hero:Hero,enemy:Enemy) {
            return enemy.x - (hero.x + hero.w);
        }
        const line = new Line(0,fieldHeight-50,fieldWidth);
        let timer = 0;

        function frame() {
            requestAnimationFrame(frame);
            timer++;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            line.draw(ctx);
        }
        frame();
    }, [aKey]);

    return (
        <>
            <div className={styles.gamefield}>
                <canvas ref={canvasRef}></canvas>
                <div className={styles.buttons}>
                    <div className={styles.button} ref={aKey}>A</div>
                    <div className={styles.button} ref={sKey}>S</div>
                    <div className={styles.button} ref={spaceKey}>Space</div>
                    <div className={styles.button} ref={kKey}>K</div>
                    <div className={styles.button} ref={lKey}>L</div>
                </div>
            </div>
        </>
    );
};
export default Gamefield;
