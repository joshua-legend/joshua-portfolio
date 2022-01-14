import {playCrazyShuffle, stopCrazyShuffle} from "../../music/music";
import {MusicInterface} from "./MusicInterface";

export class CrazySuffle implements MusicInterface{

    private aBarTime = [1.9,3.8,7.3,8.2,14.6,18.3,21.4,21.7,21.9,22.6,24.8,25.1,26.3,27.3,28,28.4,30.3,31.4,31.6,32.8,33,34.9,35.2,35.9,38,38.2,40,40.3,42.2,42.5,44.4,44.7,46.7]
    private sBarTime = [7.5,8.2,10.8,11.1,11.3,15,18.5,21.1,22.4,24.6,25.3,26.1,27.7,28.2,28.6,30.2,31.2,31.9,32.6,33.1,34.7,35.1,35.3,35.8,37.5,38.4,41.5,41.7,44.1,46.4]
    private spaceBarTime = [3.3,5.2,7.9,8.2,8.9,15.5,17.3,17.7,18.8,19.2,20.6,24.4,25.5,25.7,26.5,27.1,28.7,30.5,30.9,31,32,33.2,35,35.6,36.6,37.7,39.6,40.6,40.8,45,45.5,46.2]
    private kBarTime = [5.4,9.4,11.6,12.7,15.8,16.9,19.5,20.4,23,23.3,24.1,26.7,26.9,28.9,29.1,29.3,29.5,30.4,32.4,34,34.5,36.1,36.7,37,37.4,38.8,41.2,42,42.7,43.3,43.9,45.7,46.6]
    private lBarTime = [5.8,9.8,13,13.2,13.8,16,16.4,19.9,20.2,23.5,23.8,24,26.6,27.2,29.8,29.9,30,30.7,30.8,32.1,33.7,34.2,36.4,36.8,39,39.2,40.1,42.8,43.1,43.6,46,46.8]
    private endTime = 47;

    constructor() {}

    public play(){playCrazyShuffle();}
    public stop(){stopCrazyShuffle();}
    Aarray(): Array<number> {return this.aBarTime;}
    Karray(): Array<number> {return this.kBarTime;}
    Larray(): Array<number> {return this.lBarTime;}
    Sarray(): Array<number> {return this.sBarTime;}
    Spacearray(): Array<number> {return this.spaceBarTime;}
    getEndTime(): number {return this.endTime;}
}