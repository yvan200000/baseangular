import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 24;

  //private=> no puedes usarlo fuera de la clase
  //crear metoods ()
  public getHeroDescription():string{
    return `${this.name}- ${this.age}`;
  }
  public resetForm():void{
    this.name='ironman';
    this.age=45;
    
  }

  public changeHero():void{
    this.name='Spiderman'


  }


  public  changeAge():void{
    this.age=25

  }

  //getters =>devueve una propiedad

  get capitalizedName():string{
    return this.name.toUpperCase();

  }



}
