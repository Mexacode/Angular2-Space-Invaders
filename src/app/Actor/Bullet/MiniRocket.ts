import { IActor } from 'app/Actor/IActor';
import { BulletBase } from './BulletBase';

export class MiniRocket extends BulletBase {

    animFrame: number
    angleVel: number;
    frameRate: number;

    constructor() {
        super();
        this.angleVel = 2;
        this.animFrame = 0;
        this.frameRate = 0;
    }    

    paint(ctx: any) {
        this.drawRotatedImage(ctx, this.img_id,this.p_x, this.p_y, this.animFrame);
        super.paint(ctx);        
    }

    update(dt) {
        this.animateDt(this.frameRate++);
        
        if(!this.deleted && this.p_y < -20){
            console.log("ELIMINADO");
            this.deleted = true;
        }

        super.update(dt);
    }

    animateDt(dt: number) 
    {    
        this.animFrame +=this.angleVel;
      
        if(this.animFrame <= -10 || this.animFrame >= 10)
        {            
            this.angleVel *=-1;
        }
    }
    
}