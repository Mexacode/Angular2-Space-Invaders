import { IStates } from './../../MachineStates/IMStates';
import { Defines } from './../../Screen/Defines';
import { Screen } from './../../Screen/Screen';
import { IActor } from 'app/Actor/IActor';
import { ActorBase } from "app/Actor/ActorBase";

export abstract class EnemyBase extends ActorBase implements IActor, IStates {
  

    update(dt) {
        
        this.p_y += this.vel_y;
    }
    paint(ctx: any) {
                       
    }

    drawRotatedImage(context, image, x, y, angle) {       
        let TO_RADIANS = Math.PI/180; 
        // save the current co-ordinate system 
        // before we screw with it
        context.save(); 
     
        // move to the middle of where we want to draw our image
        context.translate(x, y);
     
        // rotate around that point, converting our 
        // angle from degrees to radians 
        context.rotate(angle * TO_RADIANS);
     
        // draw it up and to the left by half the width
        // and height of the image 


        context.drawImage(image, -((Screen.GetInstance().WIDTH * Defines.ENEMY_RATIO)/2), -(Screen.GetInstance().HEIGHT * (Defines.ENEMY_RATIO*2)/2), 
        
        (Screen.GetInstance().WIDTH * Defines.ENEMY_RATIO)
        , Screen.GetInstance().WIDTH * Defines.ENEMY_RATIO);
        

        
     
        // and restore the co-ords to how they were when we began
        context.restore(); 
    }

    SetState(state: number) {
        this.state = state;
    }
    GetState(state: number) {
        return this.state;
    }


}