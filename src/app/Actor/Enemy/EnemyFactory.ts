import { Animation } from './../Animation/Animation';
import { Defines, Animations } from './../../Screen/Defines';
import { Screen } from './../../Screen/Screen';
import { TriangleInvader } from './TriangleInvader';
import { RectInvader } from './RectInvader';
import { BubbleInvader } from './BubbleInvader';
import { IActorFactory } from './../IActorFactory';

export class EnemyFactory implements IActorFactory {
    
    createLowActor() {
        let enemy =  new BubbleInvader();
        enemy.img_id = Screen.GetInstance().IMG_BUBBLE.nativeElement;        
        enemy.p_x = Math.floor(Math.random() * Screen.GetInstance().WIDTH) + 1;        
        enemy.p_y = -100;
        enemy.w = Screen.GetInstance().WIDTH * Defines.ENEMY_RATIO
        enemy.h = Screen.GetInstance().HEIGHT * Defines.ENEMY_RATIO
        enemy.scaleH = 480;
        enemy.scaleW = 240;
        enemy.vel_y = 2;
        enemy.vel_x = 0;
        enemy.deleted = false;
        enemy.state = 0;
        enemy.damage = 25;
        //ANIMATION

        //Asingning Animations.
        let anim = new Animation(Screen.GetInstance().EXPLOTION_ANIM,4, enemy);
        enemy.animations = new Array<Animation>();
        enemy.animations.push(anim);
        
        return enemy;
    }
    createMediumActor() {
        let enemy =  new RectInvader();
        enemy.img_id = Screen.GetInstance().IMG_RECT.nativeElement;        
        enemy.p_x = Math.floor(Math.random() * Screen.GetInstance().WIDTH) + 1;
        enemy.p_y = -100;
        enemy.w = Screen.GetInstance().WIDTH * Defines.ENEMY_RATIO
        enemy.h = Screen.GetInstance().HEIGHT * Defines.ENEMY_RATIO
        enemy.vel_y = 2;
        enemy.vel_x = 0;
        return enemy;
    }
    createHighActor() {
        let enemy =  new TriangleInvader();
        enemy.img_id = Screen.GetInstance().IMG_TRIANGLE.nativeElement;        
        enemy.p_x = Math.floor(Math.random() * Screen.GetInstance().WIDTH) + 1;
        enemy.p_y = -100;
        enemy.vel_y = 2;
        enemy.vel_x = 0;
        return enemy;
    }

}