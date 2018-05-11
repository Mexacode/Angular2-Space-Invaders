import { ActorBase } from 'app/Actor/ActorBase';
import { ElementRef } from '@angular/core';
import { IActor } from './../IActor';
export class Animation implements IActor {  
    
    frames: Array<ElementRef>;
    timeRate: number;
    currentFrame: ElementRef;
    currentIndex: number;
    actor: ActorBase;

    constructor(frames: Array<ElementRef>, timeRate: number, actor: ActorBase) {
        
        this.frames = frames;
        this.timeRate = timeRate;
        this.actor = actor;

        this.currentIndex = 0;

        if(this.frames.length>0) {
            this.currentFrame = this.frames[this.currentIndex];
        }

    }

    update(dt) {

        if( dt % this.timeRate == 0 && this.currentIndex < this.frames.length){
            this.currentFrame = this.frames[this.currentIndex];
            this.actor.img_id = this.currentFrame.nativeElement;
            this.currentIndex++;
        }
        
    }

    paint(ctx: any) {
        
    }

}