
import { Screen } from './../Screen/Screen';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: "loading-component"
    ,templateUrl: "../common/loading.template.html"    
})

export class Loading implements AfterViewInit  {


    public instance: Loading;

    constructor(){
        this.instance = this;
    }

    @ViewChild('bubbleimg')  bubbleEnemy: ElementRef;
    @ViewChild('rectimg')  rectEnemy: ElementRef;
    @ViewChild('triangleimg')  triangleEnemy: ElementRef;
    @ViewChild('spaceshipimg')  spaceshipAlly: ElementRef;
    @ViewChild('minirocketimg')  minirocketBullet: ElementRef;
    @ViewChild('explotionimg')  explotionActor: ElementRef;

    @ViewChild('spaceimg')  spaceBG: ElementRef;

    //Explotion anim
    @ViewChild('explotionanim1')  e1: ElementRef;
    @ViewChild('explotionanim2')  e2: ElementRef;
    @ViewChild('explotionanim3')  e3: ElementRef;
    @ViewChild('explotionanim4')  e4: ElementRef;
    @ViewChild('explotionanim5')  e5: ElementRef;
    @ViewChild('explotionanim6')  e6: ElementRef;
    @ViewChild('explotionanim7')  e7: ElementRef;
    @ViewChild('explotionanim8')  e8: ElementRef;
    @ViewChild('explotionanim9')  e9: ElementRef;


    ngAfterViewInit(): void {

        //IMAGES CACHE
        Screen.GetInstance().IMG_SPACESHIP = this.spaceshipAlly;
        Screen.GetInstance().IMG_BUBBLE = this.bubbleEnemy;
        Screen.GetInstance().IMG_RECT = this.rectEnemy;
        Screen.GetInstance().IMG_TRIANGLE = this.triangleEnemy;
        Screen.GetInstance().IMG_MINIROCKET = this.minirocketBullet;
        Screen.GetInstance().IMG_EXPLOTION = this.explotionActor;

        //SCENE
        Screen.GetInstance().IMG_SPACE_BG = this.spaceBG;
        
        //Explotion anim
        Screen.GetInstance().EXPLOTION_ANIM = new Array<ElementRef>();

        Screen.GetInstance().EXPLOTION_ANIM.push(this.e1);
        Screen.GetInstance().EXPLOTION_ANIM.push(this.e2);
        Screen.GetInstance().EXPLOTION_ANIM.push(this.e3);
        Screen.GetInstance().EXPLOTION_ANIM.push(this.e4);
        Screen.GetInstance().EXPLOTION_ANIM.push(this.e5);
        Screen.GetInstance().EXPLOTION_ANIM.push(this.e6);
        Screen.GetInstance().EXPLOTION_ANIM.push(this.e7);
        Screen.GetInstance().EXPLOTION_ANIM.push(this.e8);
        Screen.GetInstance().EXPLOTION_ANIM.push(this.e9);
        
    }
    
}