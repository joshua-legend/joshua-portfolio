import React, {useEffect, useRef, useState} from 'react';
import {line} from "./line";

const Leftline = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        canvas.width = window.innerWidth * 0.7;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext(`2d`) as CanvasRenderingContext2D;

        const leftLine = new line(0,canvas.height);
        const rightLine = new line(canvas.width-5,canvas.height);
        leftLine.draw(ctx);
        rightLine.draw(ctx);

        function frame() {
            requestAnimationFrame(frame)
            leftLine.move();
            leftLine.draw(ctx);
            rightLine.move();
            rightLine.draw(ctx);
        }
        frame();
    }, []);

    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    );
};
export default Leftline;
