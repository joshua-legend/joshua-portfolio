import React, {useEffect, useRef, useState} from 'react';
import styles from "./gamefiled.module.css"
import {Line} from "./class/line";
import {Bar} from "./class/bar";
import {playCrazyShuffle, stopCrazyShuffle} from "../music/music";
import {CrazySuffle} from "./music/CrazySuffle";
import {MusicInterface} from "./music/MusicInterface";

interface Iprops {
    class:any,
}

const Gamefield = (props:Iprops) => {


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
        console.log(press);
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
            console.log(press);
        })

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const fieldWidth = window.innerWidth * 0.65;
        const fieldHeight = window.innerHeight * 0.8;
        canvas.width = fieldWidth;
        canvas.height = fieldHeight;
        const ctx = canvas.getContext(`2d`) as CanvasRenderingContext2D;
        const line = new Line(0, fieldHeight - 50, fieldWidth);

        const aBar = new Array();
        const sBar = new Array();
        const spaceBar = new Array();
        const kBar = new Array();
        const lBar = new Array();
        let timer = 0;
        let realTimer =0;
        let speed = 10;
        let numberHit = 0

        setInterval(function() {realTimer++;}, 100);
        const cr = props.class as MusicInterface;
        const aBarTime = cr.Aarray();
        const sBarTime = cr.Sarray();
        const spaceBarTime = cr.Spacearray();
        const kBarTime = cr.Karray();
        const lBarTime = cr.Larray();

        cr.play();

        function hit(stay:boolean) {
            ctx.font = 'bold 150px Orbitron';
            ctx.fillStyle = '#006db3';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            if(stay)ctx.fillText('H I T\n'+numberHit++, canvas.width/2,canvas.height/2);
            else ctx.fillText('H I T\n'+numberHit, canvas.width/2,canvas.height/2)
        }

        function frame() {
            requestAnimationFrame(frame);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if(realTimer/10==28) speed =15;
            if(realTimer/10==30) speed =20;
            timer++;
            line.draw(ctx);
            hit(false);

            if (press) {line.pressDraw(ctx);}
            if(aBarTime.includes((realTimer/10)+0.5)){aBar.push(new Bar(0,0,fieldWidth/5));aBarTime.shift()}
            aBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move(speed);
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1);hit(true)}
            })
            if(sBarTime.includes((realTimer/10)+0.5)){sBar.push(new Bar(fieldWidth*1/5,0,fieldWidth/5));sBarTime.shift()}
            sBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move(speed);
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1);hit(true)}
            })
            if(spaceBarTime.includes((realTimer/10)+0.5)){spaceBar.push(new Bar(fieldWidth*2/5,0,fieldWidth/5));spaceBarTime.shift()}
            spaceBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move(speed);
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1);hit(true)}
            })
            if(kBarTime.includes((realTimer/10)+0.5)){kBar.push(new Bar(fieldWidth*3/5,0,fieldWidth/5));kBarTime.shift()}
            kBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move(speed);
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1);hit(true)}
            })
            if(lBarTime.includes((realTimer/10)+0.5)){lBar.push(new Bar(fieldWidth*4/5,0,fieldWidth/5));lBarTime.shift()}
            lBar.forEach((bar,idx,obj)=>{
                if(bar.x < 0){obj.splice(idx,1)}
                bar.move(speed);
                bar.draw(ctx);
                if(bar.Ishitbar(press)){obj.splice(idx,1);hit(true)}
            })
            if(realTimer/10==cr.getEndTime()) cr.stop();
        }

        frame();
    }, [aKey]);

    return (
        <>
            <div className={styles.gamefield}>
                <video src="ingamebg.mp4" loop autoPlay muted></video>
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
