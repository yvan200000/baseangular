import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { character } from '../../../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {





  //creamos el evento
  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter();

    //incializamos el caracter
    public character: character = { name: '', power: 0 };

  //recibir data del padre
  @Input()
  public characterList:character[]=[{name:'trunk',power:10}];



  //elimiar personaje
  onDeleteCharacter(id?:string):void{
    //emitir el id del personaje
    
    if(!id) return;

    //console.log(id)
    //this.onDeleteCharacter.emit(this.character);
    //emitimos el evento
    this.onDelete.emit(id);

  }
}
