import React, {useEffect, useRef, useState} from 'react';
import styles from "./gamefiled.module.css"
import {Line} from "./class/line";
import {Bar} from "./class/bar";
import {playCrazyShuffle, stopCrazyShuffle} from "../music/music";


const Gamefield = () => {


    const canvasRef = useRef<HTMLCanvasElement>(null);
    const aKey = useRef<HTMLDivElement>(null);
    const sKey = useRef<HTMLDivElement>(null);
    const spaceKey = useRef<HTMLDivElement>(null);
    const kKey = useRef<HTMLDivElement>(null);
    const lKey = useRef<HTMLDivElement>(null);
    let press = false;
    document.addEventListener('keyup', ev => {
        (aKey.current as HTMLDivElement).style.backgroundColor = 'transparent';
        (sKey.current as HTMLDivElement).style.backgroundColor = 'transparent';
        (spaceKey.current as HTMLDivElement).style.backgroundColor = 'transparent';
        (kKey.current as HTMLDivElement).style.backgroundColor = 'transparent';
        (lKey.current as HTMLDivElement).style.backgroundColor = 'transparent';
        press = false;
    })
    document.addEventListener('keydown', ev => {
            if (ev.key === "a" || ev.key === "A") {
                (aKey.current as HTMLDivElement).style.backgroundColor = '#f8bbd0';
                press = true;
            }
            if (ev.key === "s" || ev.key === "S") {
                (sKey.current as HTMLDivElement).style.backgroundColor = '#f8bbd0';
                press = true;
            }
            if (ev.keyCode === 32) {
                (spaceKey.current as HTMLDivElement).style.backgroundColor = '#f8bbd0';
                press = true;
            }
            if (ev.key === "k" || ev.key === "K") {
                (kKey.current as HTMLDivElement).style.backgroundColor = '#f8bbd0';
                press = true
            }
            if (ev.key === "l" || ev.key === "L") {
                (lKey.current as HTMLDivElement).style.backgroundColor = '#f8bbd0';
                press = true
            }
        })

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const fieldWidth = window.innerWidth * 0.65;
        const fieldHeight = window.innerHeight * 0.8;
        canvas.width = fieldWidth;
        canvas.height = fieldHeight;
        canvas.style.backgroundImage = "url('cyber.png')";
        canvas.style.backgroundSize = "cover";
        const ctx = canvas.getContext(`2d`) as CanvasRenderingContext2D;

        // function collaspe(hero: Hero, enemy: Enemy) {
        //     return enemy.x - (hero.x + hero.w);
        // }

        const line = new Line(0, fieldHeight - 50, fieldWidth);
        const aBar = new Array();
        const sBar = new Array();
        const spaceBar = new Array();
        const kBar = new Array();
        const lBar = new Array();

        const aBarTime = [1.9,3.8,7.3,8.2,14.6,18.3,21.4,21.7,21.9,22.6,24.8,25.1,26.3,27.3,28,28.4,30.3,31.4,31.6,32.8,33,34.9,35.2,35.9,38,38.2,40,40.3,42.2,42.5,44.4,44.7,46.7]
        const sBarTime = [7.5,8.2,10.8,11.1,11.3,15,18.5,21.1,22.4,24.6,25.3,26.1,27.7,28.2,28.6,30.2,31.2,31.9,32.6,33.1,34.7,35.1,35.3,35.8,37.5,38.4,41.5,41.7,44.1,46.4]
        const spaceBarTime = [3.3,5.2,7.9,8.2,8.9,15.5,17.3,17.7,18.8,19.2,20.6,24.4,25.5,25.7,26.5,27.1,28.7,30.5,30.9,31,32,33.2,35,35.6,36.6,37.7,39.6,40.6,40.8,45,45.5,46.2]
        const kBarTime = [5.4,9.4,11.6,12.7,15.8,16.9,19.5,20.4,23,23.3,24.1,26.7,26.9,28.9,29.1,29.3,29.5,30.4,32.4,34,34.5,36.1,36.7,37,37.4,38.8,41.2,42,42.7,43.3,43.9,45.7,46.6]
        const lBarTime = [5.8,9.8,13,13.2,13.8,16,16.4,19.9,20.2,23.5,23.8,24,26.6,27.2,29.8,29.9,30,30.7,30.8,32.1,33.7,34.2,36.4,36.8,39,39.2,40.1,42.8,43.1,43.6,46,46.8]

        let timer = 0;
        let realTimer =0

        setInterval(function() {realTimer++;}, 100);
        playCrazyShuffle()

        function frame() {
            requestAnimationFrame(frame);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            timer++;
            line.draw(ctx);

            if (press) {line.pressDraw(ctx);
                ctx.font = '50px Courier';
                ctx.fillStyle = 'red';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillText('H I T', canvas.width/2,canvas.height/2);
            }

            if(aBarTime.includes((realTimer/10)+0.5)){aBar.push(new Bar(0,0,fieldWidth/5));aBarTime.shift()}
            aBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move();
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1)}
            })
            if(sBarTime.includes((realTimer/10)+0.5)){sBar.push(new Bar(fieldWidth*1/5,0,fieldWidth/5));sBarTime.shift()}
            sBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move();
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1)}
            })
            if(spaceBarTime.includes((realTimer/10)+0.5)){spaceBar.push(new Bar(fieldWidth*2/5,0,fieldWidth/5));spaceBarTime.shift()}
            spaceBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move();
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1)}
            })
            if(kBarTime.includes((realTimer/10)+0.5)){kBar.push(new Bar(fieldWidth*3/5,0,fieldWidth/5));kBarTime.shift()}
            kBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move();
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1)}
            })
            if(lBarTime.includes((realTimer/10)+0.5)){lBar.push(new Bar(fieldWidth*4/5,0,fieldWidth/5));lBarTime.shift()}
            lBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move();
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1)}
            })
            if(realTimer/10==47) stopCrazyShuffle()
        }

        frame();
    }, [aKey]);

    return (
        <>
            <div className={styles.gamefield}>
                <video src="gamebg.mp4" loop autoPlay muted></video>
                <div className={styles.content}>
                    <canvas ref={canvasRef}></canvas>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.content} ref={aKey}>A</div>
                    <div className={styles.content} ref={sKey}>S</div>
                    <div className={styles.content} ref={spaceKey}>Space</div>
                    <div className={styles.content} ref={kKey}>K</div>
                    <div className={styles.content} ref={lKey}>L</div>
                </div>
            </div>
        </>
    );
};
export default Gamefield;
