export class line{
    private x
    private y;
    private w;
    private h;
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
        this.w = 5;
        this.h = 5;
    }



    draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = 'gray'
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    move(){
        this.y -= 3;
    }
}