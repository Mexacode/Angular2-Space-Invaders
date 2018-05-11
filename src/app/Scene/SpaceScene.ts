import { ElementRef } from '@angular/core';
import { Screen } from './../Screen/Screen';
import { IScene } from './IScene';

import { SceneBase } from 'app/Scene/SceneBase';
export class SpaceScene extends SceneBase {

    constructor(){
        super();  

        this.imgBG = Screen.GetInstance().IMG_SPACE_BG;
        this.vely = 1;
        this.x = 0;
        this.y = 0;
    }

    paint(ctx){
        
        ctx.drawImage(this.imgBG.nativeElement, this.x, this.y);
		// Draw another image at the top edge of the first image
		ctx.drawImage(this.imgBG.nativeElement, this.x, this.y - this.imgBG.nativeElement.offsetHeight);
		// If the image scrolled off the screen, reset
		if (this.y >= this.imgBG.nativeElement.offsetHeight)
			this.y = 0;

        super.paint(ctx);
    }

    update(dt){

        this.y += this.vely;

        super.update(dt)
    }
    
   
}