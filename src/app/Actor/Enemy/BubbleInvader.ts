import { IStates } from './../../MachineStates/IMStates';
import { Animation } from './../Animation/Animation';
import { Defines, ActorState, Animations } from './../../Screen/Defines';
import { Screen } from './../../Screen/Screen';
import { EnemyBase } from 'app/Actor/Enemy/EnemyBase';
import { IActor } from './../IActor';

export class BubbleInvader extends EnemyBase {
   

    
    animFrame: number
    angleVel: number;
    explotion: number; 
    frameRate=0;
   
    
    constructor(){  
        super();

        this.angleVel = 2;
        this.animFrame = 0;
        this.explotion = 0;

        this.scaleW = this.w*4;
        this.scaleH = this.h*2;  
    }

    entero = 240;
    paint(ctx: any) 
    {

        switch(this.state) {

            case ActorState.EXPLOTION_STATE:{
                //TODO EXPLOTION
                this.drawRotatedImage(ctx, this.img_id,this.p_x, this.p_y, this.animFrame);
            }
            break;
            default:
                this.drawRotatedImage(ctx, this.img_id,this.p_x, this.p_y, this.animFrame);
            break;

        }

        super.paint(ctx);        
    }

    update(dt) 
    {
        switch (this.state){

            case ActorState.EXPLOTION_STATE:{
                //TODO EXPLOTION
                this.animations[Animations.ANIMATIONS_EXPLOTION].update(dt);
                if(this.animations[Animations.ANIMATIONS_EXPLOTION].currentIndex == this.animations[Animations.ANIMATIONS_EXPLOTION].frames.length-1){
                    this.SetState(ActorState.DELETED_STATE);
                }
            }
            break;

            case ActorState.IDDLE_STATE:{
                
                this.animateDt(this.frameRate++); 
                if(this.p_y > Screen.GetInstance().HEIGHT){
                    console.log("ELIMINADO");
                    this.SetState(ActorState.DELETED_STATE);
                }

            }

            case ActorState.DELETED_STATE:{

            }            
            
            break;
        }
       

        super.update(dt);
    }

    animateDt(dt: number) 
    {    
        this.animFrame +=this.angleVel;
      
        if(this.animFrame <= -20 || this.animFrame >= 20){
            
            this.angleVel *=-1;
        }
    }

    
    


}