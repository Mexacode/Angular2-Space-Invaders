import { Defines } from './../../Screen/Defines';
import { Screen } from './../../Screen/Screen';
import { SpaceShip } from './SpaceShip';
import { IActorFactory } from './../IActorFactory';
export class AllyFactory implements IActorFactory{
    
    public createLowActor() {
        let ally = new SpaceShip();
        ally.img_id = Screen.GetInstance().IMG_SPACESHIP.nativeElement;
        ally.p_x = Screen.GetInstance().WIDTH/2;
        ally.p_y = Screen.GetInstance().HEIGHT/1.5;
        ally.w =  Screen.GetInstance().WIDTH * Defines.ALLY_RATIO ;
        ally.h =  Screen.GetInstance().WIDTH * Defines.ALLY_RATIO ;
        ally.vel_x = 0;
        ally.health = 100;
        return ally;
    }
    public createMediumActor(){
        
    }
    public createHighActor(){

    }

}