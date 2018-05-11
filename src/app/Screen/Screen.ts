
import { ElementRef } from '@angular/core';
export class Screen {
    private static _instance;

    public POS_X: number;
    public POS_Y: number;
    public WIDTH: number;
    public HEIGHT: number;

    public IMG_SPACESHIP: ElementRef;
    public IMG_BUBBLE: ElementRef;
    public IMG_RECT: ElementRef;
    public IMG_TRIANGLE: ElementRef;
    public IMG_MINIROCKET: ElementRef;
    public IMG_EXPLOTION: ElementRef;

    //SCENE
    public IMG_SPACE_BG: ElementRef;
    
    //EXPLOTION ANIM
    public EXPLOTION_ANIM: Array<ElementRef>;

    

    public static GetInstance(){
       if(this._instance == undefined || this._instance == null){
           this._instance = new Screen();
       }
       return this._instance;
    }
    
}