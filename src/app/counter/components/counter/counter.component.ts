

import { Component, numberAttribute } from "@angular/core";


//crar componnte de la clase countercomponent
@Component({
    selector: 'app-counter',


    template: `
  <p>
  contador:{{counter}}
</p>


<button (click)="increaseBy(1)">+1</button>
<button (click)="reset()">reset</button>
  `,
})


//creamos la clase
export class CounterComponent {

    public counter:number=10;

    increaseBy(value:number):void{
        this.counter=this.counter+value;
    }
    reset():void{
        this.counter=10;
    }





}