import { Animation } from './Animation/Animation';
import { ElementRef } from '@angular/core';
import { IActor } from "app/Actor/IActor";

export abstract class ActorBase {
 
    public name: string;
    public img_id: ElementRef;
    public animations: Array<Animation>;
    public p_x: number;
    public p_y: number;
    public vel_x: number;
    public vel_y: number; 
    public w: number; 
    public h: number; 
    public scaleW: number;
    public scaleH: number;
    public state: number;  
    public health: number;  
    public damage: number;  
    public deleted: boolean;
    public exploted: boolean;    
    
}

