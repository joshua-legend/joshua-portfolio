export class Line {
    private _x;
    private _y;
    private _w;
    private _h;

    constructor(x:number,y:number,w:number) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = 25;
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = `#a2e3ff`;
        ctx.fillRect(this._x,this._y,this._w,this._h)
    }

}