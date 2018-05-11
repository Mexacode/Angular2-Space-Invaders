import { ElementRef } from '@angular/core';
import { Screen } from './../Screen/Screen';
import { IScene } from './IScene';
export abstract class SceneBase implements IScene {
   
    
    imgBG: ElementRef;
    image:string;
    x: number;
    y: number;
    w: number;
    h: number;
    vely: number;
     

    paint(ctx) {        
        
        

    }

    update(dt){

    }

    onkeydown(keycode: number) {
        
    }
    onkeyup(keycode: number) {
        
    }

}