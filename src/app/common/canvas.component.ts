import { VelocityParticle } from './particle.vel';
import { element } from 'protractor';

import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
    selector: "canvas-component"
    ,templateUrl: "./canvas.template.html"
    ,host: {
        '(window:keydown)': 'OnKeyPress($event.keyCode)'
        ,'(window:keyup)': 'OnKeyRelease($event.keyCode)'

    }
})

export class CanvasComponent implements OnInit  {
    
    @ViewChild('myCanvas') canvasRef: ElementRef;

    private running: boolean;
    private particles = new Array<VelocityParticle>();
    
    private rect  = {
        x: 25,
        y: 20,
        w: 30,
        h: 30,
        velx: 5,
        vely: 8
    }

    private bar = {
        x: 240,
        y: 470,
        w: 140,
        h: 20,
        vel: 0
    }

    ngOnInit() {
        this.running = true;
        this.onInitParticle();        
        this.paint();
    }

    onInitParticle() {
        let maxX = this.rect.x;
        let minX = this.rect.x-30;

        let maxY = this.rect.y;
        let minY = this.rect.y-30;

        for(let i = 0; i<200 ; i++){

            
            let randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            let randomy = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            console.log("rx: "+ randomX + " x:"+this.rect.x );
            let randomRadius = Math.floor(Math.random() * 4) + 1  
            //this.particles.push(new VelocityParticle(randomX,randomy,randomRadius,randomRadius));
        }
        
    }

    ngOnDestroy() {
        this.running = false;
    }

    private paint(){
        if (!this.running) {
            return;
        }

        // Paint current frame
        let ctx: CanvasRenderingContext2D =
            this.canvasRef.nativeElement.getContext('2d');

        // Draw background (which also effectively clears any previous drawing)
        ctx.fillStyle = 'rgb(221, 0, 49)';
        ctx.fillRect(0, 0, 800, 500);

        //this.update();
        

        // Draw flock
        ctx.beginPath();
        ctx.fillStyle = `rgb(255,255,255)`;
        let rect = this.rect;
        let bar = this.bar;
        ctx.fillRect(rect.x,rect.y,rect.w,rect.h);
        ctx.fillRect(bar.x, bar.y, bar.w, bar.h);
       
        // Schedule next
        for(let particle of this.particles){
            if(particle != undefined)
                 particle.paint(ctx);
        }
        this.onInitParticle();

        requestAnimationFrame(() => this.paint());
    }
        
    

    public update(dt) {
         
        this.rect.x += this.rect.velx;
        this.rect.y += this.rect.vely; 
        this.bar.x += this.bar.vel;

        let element =   this.canvasRef.nativeElement;

        if(this.rect.x > element.width || this.rect.x < 0)     
        {
            this.rect.velx *=-1; 
        }
        
        if(this.rect.y < 0)     
        {
            this.rect.vely *=-1; 
        }
        if(this.intersectRect(this.rect, this.bar)){
            
            this.rect.vely *=-1;
        }


        for(let particle of this.particles){
           if(particle != undefined)
            particle.updateParticle();
        }
         let index = 0
        for(let particle of this.particles){
           
            if(particle != undefined && particle.delete){
               delete this.particles[index];
           }
            index++;
        }
        
          
    }

    public OnKeyPress(keycode) {
        //37 - 39
        console.log(keycode);
        if(keycode == 37){
            this.bar.vel = -8;     
        }
         if(keycode == 39){
            this.bar.vel = 8;     
        }
        
    }
    
    public OnKeyRelease (keycode) {
        this.bar.vel = 0;
    }

    intersectRect(r1, r2) {
        return !(r2.x > r1.w + r1.x || 
                r2.w + r2.x < r1.x || 
                r2.y > r1.h+r1.y ||
                r2.h + r2.y < r1.y);
    }

}
