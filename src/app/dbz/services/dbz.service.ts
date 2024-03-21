import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interfaces';

import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: character[] = [
    { id: uuid(), name: 'kirlin', power: 10 },
    { id: uuid(), name: 'goku', power: 2000 },
    { id: uuid(), name: 'vegeta', power: 1000 },
  ];

  //metodo para agregar el nuevo caracter
  onNewCharacter(c: character): void {
    //  console.log({c})

    //agregar id
    const newCharacter: character = {
      id: uuid(),
      ...c,
    };

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    //console.log(c)
    //eliminamo el usuuario
    this.characters = this.characters.filter((e) => e.id != id);
  }

  constructor() {}
}
