import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addcharacter.component.html',
  styleUrl: './addcharacter.component.css',
})
export class AddcharacterComponent {
  //tipo de dato que fluye y creamos el evento
  @Output()
  public onNewCharacter: EventEmitter<character> = new EventEmitter();

  

  //inicializamos el personaje
  public character: character = { name: '', power: 0 };

  emitCharacter(): void {
    //validacion
    if (this.character.name.length === 0) return;

    console.log(this.character);
    //enviamos el ojeto que recibamos la padre
    this.onNewCharacter.emit(this.character);

    //limpiamos el personaje
    //this.character.name = '';
    //this.character.power = 0;
  }


}
