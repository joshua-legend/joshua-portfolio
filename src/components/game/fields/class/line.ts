export class Line {
    private _x;
    private _y;
    private _w;
    private _h;

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get w() {
        return this._w;
    }

    set w(value) {
        this._w = value;
    }

    get h() {
        return this._h;
    }

    set h(value) {
        this._h = value;
    }

    constructor(x:number,y:number,w:number) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = 50;
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = `#a2e3ff`;
        ctx.fillRect(this._x,this._y,this._w,this._h)
    }

    pressDraw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = `#ffccbc`;
        ctx.fillRect(this._x,this._y,this._w,this._h)
    }
}