import { Component } from '@angular/core';
import { character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //injectar my serviciio
  constructor(private dbzService: DbzService) {}
  get characters(): character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(c:character):void{
    this.dbzService.onNewCharacter(c)
  }
}
