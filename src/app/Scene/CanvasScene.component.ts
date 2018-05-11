import { BulletBase } from './../Actor/Bullet/BulletBase';
import { Loading } from './Loading';
import { Defines, ActorState } from './../Screen/Defines';
import { BulletFactory } from './../Actor/Bullet/BulletFactory';
import { EnemyBase } from 'app/Actor/Enemy/EnemyBase';
import { EnemyFactory } from './../Actor/Enemy/EnemyFactory';
import { ActorBase } from 'app/Actor/ActorBase';
import { AllyBase } from 'app/Actor/Ally/AllyBase';
import { AllyFactory } from './../Actor/Ally/AllyFactory';
import { Screen } from './../Screen/Screen';
import { SpaceScene } from './SpaceScene';
import { SceneBase } from 'app/Scene/SceneBase';
import { IScene } from './IScene';
import { element } from 'protractor';

import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, ComponentRef } from '@angular/core';
import { IEvents } from 'app/Events/IEvenets';

@Component({
    selector: "canvas-component"
    ,templateUrl: "../common/canvas.template.html"
    ,host: {
        '(window:keydown)': 'onkeydown($event.keyCode)'
        ,'(window:keyup)': 'onkeyup($event.keyCode)'

    }
})

export class CanvasScene implements AfterViewInit,  IScene, IEvents  {


    
    //Load
    @ViewChild('myCanvas') canvasRef: ElementRef;
    @ViewChild('myLoading') loadingRef: ComponentRef<Loading>;
   
    
        

    ctx: CanvasRenderingContext2D;
    //Factories
    allyfactory  = new AllyFactory();
    enemyfactory = new EnemyFactory();
    bulletFactory= new BulletFactory();

    //Scenes
    mainScene: SpaceScene;

    //Actors
    spaceship: AllyBase;    
    enemyArray= new  Array<EnemyBase>();
    bulletArray= new  Array<BulletBase>();

    ngAfterViewInit(): void {

        this.ctx  = this.canvasRef.nativeElement.getContext('2d'); 
        
        this.mainScene = new  SpaceScene(); 
        
        let screnscale = 0.98;

        Screen.GetInstance().WIDTH =  this.ctx.canvas.width = window.innerWidth*screnscale;
        Screen.GetInstance().HEIGHT =  this.ctx.canvas.height = window.innerHeight*screnscale; 

        this.spaceship =  this.allyfactory.createLowActor();       
        this.activateEnemyFactory();    
        this.activateBulletFactory();
        
        window.onresize = (e) =>
        {
            //ngZone.run will help to run change detection             
            Screen.GetInstance().WIDTH =  this.ctx.canvas.width = window.innerWidth*screnscale;
            Screen.GetInstance().HEIGHT =  this.ctx.canvas.height = window.innerHeight*screnscale;
            this.resetPoints();
            
        };

        this.paint(this.ctx);
    }
    Dtcicle = 0;
    paint(ctx) { 

        ctx.beginPath();   
        this.mainScene.paint(ctx);
        this.spaceship.paint(ctx);   

        this.enemyArray.forEach(enemy => {
            enemy.paint(ctx);
        }); 
        this.bulletArray.forEach(bullet => {
            bullet.paint(ctx);
        });             
        
        this.update(this.Dtcicle++);

        //FRAME-RATE
        requestAnimationFrame(() => this.paint(ctx));

    }

    update(dt){
        
        this.mainScene.update(dt);
        this.spaceship.update(dt);   
        
        this.enemyArray.forEach(enemy => {
            enemy.update(dt);
        }); 
        this.bulletArray.forEach(bullet => {
            bullet.update(dt);
        }); 

        this.verifyCollitions();


        //GARBAGE COLLECTOR
        this.enemyArray = this.enemyArray.filter(x => x.state != ActorState.DELETED_STATE)
        this.bulletArray = this.bulletArray.filter(x => !x.deleted)
       
    }

    onkeydown(keycode: number) {
        this.mainScene.onkeydown(keycode);
        this.spaceship.onkeydown(keycode);
    }

    onkeyup(keycode: number) {
        this.mainScene.onkeyup(keycode);
        this.spaceship.onkeyup(keycode);
        console.log(keycode);        
    }

   
    activateEnemyFactory() {

        let enemy = this.enemyfactory.createLowActor();
        this.enemyArray.push(enemy);

        setTimeout(() => 
        {
            this.activateEnemyFactory();
        },
        600);

    }

    activateBulletFactory() 
    {        
        let bullet = this.bulletFactory.createLowActor();
        bullet.p_x =  this.spaceship.p_x + Screen.GetInstance().WIDTH * Defines.ALLY_RATIO/2;
        bullet.p_y =  this.spaceship.p_y;
        this.bulletArray.push(bullet);

        setTimeout(() => 
        {
            this.activateBulletFactory();
        },
        300);
        
    }

    verifyCollitions() {

        this.enemyArray.forEach(enemy => {
            if(enemy.state != ActorState.EXPLOTION_STATE)
            {
                this.bulletArray.forEach(bullet => {
                    let intersect  =  this.intersectRect(enemy, bullet);    
                    if(intersect) {                        
                        enemy.SetState(ActorState.EXPLOTION_STATE);
                        bullet.deleted = true;
                    }
                });
            
                if(this.intersectRect(enemy, this.spaceship)){
                    enemy.SetState(ActorState.EXPLOTION_STATE);
                    this.spaceship.health -= enemy.damage;
                    console.log("Spaceship was intersect  health: " +this.spaceship.health);
                }
            }

           
        });
    }

    intersectRect(r1, r2) {
        return !(r2.p_x > r1.w + r1.p_x || 
                r2.w + r2.p_x < r1.p_x || 
                r2.p_y > r1.h+r1.p_y ||
                r2.h + r2.p_y < r1.p_y);
    }   
    
    resetPoints(){
        this.spaceship.p_x = Screen.GetInstance().WIDTH/2;
        this.spaceship.p_y = Screen.GetInstance().HEIGHT/1.5;
    }

}