import React, {useEffect, useRef, useState} from 'react';
import {Hero} from "./Hero";
import {Enemy} from "./Enemy";
import * as url from "url";

const Fields = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const fieldWidth = window.innerWidth * 0.85;
        const fieldHeight = window.innerHeight * 0.5;
        canvas.width = fieldWidth;
        canvas.height = fieldHeight;
        canvas.style.backgroundImage = "url('citybg.png')";
        canvas.style.objectFit = "cover";
        const ctx = canvas.getContext(`2d`) as CanvasRenderingContext2D;

        document.addEventListener('keydown',function (e) {
            if(e.code=='Space'){
                direction = !direction;
            }
        });
        function collaspe(hero:Hero,enemy:Enemy) {
            return enemy.x - (hero.x + hero.w);
        }
        const hero = new Hero(fieldWidth/2,fieldHeight-200);
        const enemies = new Array();
        const enemies1 = new Array();
        let timer = 0;

        let turn = true;
        let direction = true;

        function frame() {
            requestAnimationFrame(frame);
            timer++;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            if(timer % 200 === 0){
                const cloud = new Enemy(fieldWidth,fieldHeight-200);
                const cloud1 = new Enemy(0,fieldHeight-200)
                enemies.push(cloud)
                enemies1.push(cloud1)
                turn = !turn;
            }
            enemies.forEach((enemy,idx,obj)=>{
                if(enemy.x < 0){obj.splice(idx,1)}
                if(collaspe(hero,enemy)<0) obj.splice(idx,1);
                enemy.move();
                collaspe(hero,enemy);
                enemy.draw(ctx);
            })
            enemies1.forEach((enemy,idx,obj)=>{
                if(enemy.x > fieldWidth){obj.splice(idx,1)}
                if(collaspe(hero,enemy)>0) obj.splice(idx,1);
                enemy.moveright();
                collaspe(hero,enemy);
                enemy.draw(ctx);
            })

            hero.move(direction)
            if((timer / 5) % 2 == 0 && direction) hero.drawRightLong(ctx);
            // else if((timer / 5) % 2 == 0 && !direction) hero.drawLeftLong(ctx);
            // else if((timer / 5) % 2 == 1 && direction) hero.drawRightShort(ctx);
            else hero.drawRightShort(ctx);
        }
        frame();
    }, []);

    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    );
};
export default Fields;
