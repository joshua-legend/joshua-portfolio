export class Hero {
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

    constructor(x:number,y:number) {
        this._x = x;
        this._y = y;
        this._w = 5;
        this._h = 5;
    }
    draw(ctx:CanvasRenderingContext2D){
        const img = new Image()
        img.src = 'gu.png';
        ctx.drawImage(img,this._x, this._y, 50, 50);
    }

    move(direction:boolean){
        if(direction) this._x +=0.5;
        else this._x -=0.5;
    }
}