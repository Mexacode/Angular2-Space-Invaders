import { IEvents } from 'app/Events/IEvenets';
import { Defines } from './../../Screen/Defines';
import { IActor } from './../IActor';
import { SpaceShip } from './SpaceShip';
import { ActorBase } from "app/Actor/ActorBase";

export abstract class AllyBase extends ActorBase implements IActor, IEvents {
   
    
    update(dt) {
        this.p_x += this.vel_x;
    }
    paint(ctx: any) {
      
        
    }

    onkeydown(keycode: number) {

        if(keycode == 37){
            this.vel_x = -12;     
        }
         if(keycode == 39){
            this.vel_x = 12;     
        }
        
    }
    onkeyup(keycode: number) {
        this.vel_x = 0; 
    }
 
}