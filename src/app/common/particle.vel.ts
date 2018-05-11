
export class VelocityParticle {
    private x: number;
    private y: number;
    private w: number;
    private h: number;
    delete = false;
    
    constructor (x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    updateParticle(){
        if(this.w>0){
            this.w -= 2;
        }
        if(this.h>0){
            this.h -= 2;
        }
        if(this.w <= 0 || this.h <= 0){
            console.log("murio");
            this.delete = true;
        }
    }

    paint(ctx){        
        
        ctx.fillStyle = `rgb(255,255,255)`;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.w, this.h, 1 * Math.PI/180, 0, 2 * Math.PI);
        ctx.fill();   
    }
}