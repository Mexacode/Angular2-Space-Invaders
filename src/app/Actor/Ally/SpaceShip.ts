import { Defines } from './../../Screen/Defines';
import { Screen } from './../../Screen/Screen';

import { AllyBase } from 'app/Actor/Ally/AllyBase';

export class SpaceShip extends AllyBase   {

    paint(ctx){
    
        ctx.drawImage(this.img_id,
         this.p_x, this.p_y,
        Screen.GetInstance().WIDTH * Defines.ALLY_RATIO,
        Screen.GetInstance().WIDTH * Defines.ALLY_RATIO);        
        super.paint(ctx);
    }

    update(dt){

        super.update(dt);
    }

    onkeydown(keycode: number ){

        super.onkeydown(keycode);

    }

    onkeyup(keycode: number ) {        
        super.onkeyup(keycode);
    }

    
   
}