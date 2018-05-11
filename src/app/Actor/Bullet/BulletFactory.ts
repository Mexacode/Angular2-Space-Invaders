import { Defines } from './../../Screen/Defines';
import { Screen } from './../../Screen/Screen';
import { MiniRocket } from './MiniRocket';
import { IActorFactory } from './../IActorFactory';

export class BulletFactory implements IActorFactory {
    
    createLowActor() {

        let bullet = new MiniRocket();
        bullet.img_id = Screen.GetInstance().IMG_MINIROCKET.nativeElement;
        bullet.p_x = -500;
        bullet.p_y = -500;
        bullet.w = Screen.GetInstance().WIDTH * Defines.BULLET_RATIO;
        bullet.h = Screen.GetInstance().HEIGHT * Defines.BULLET_RATIO;
        bullet.vel_x = 0;
        bullet.vel_y = -15;

        return bullet;

    }

    createMediumActor() {
        
    }

    createHighActor() {
        
    }

    
}