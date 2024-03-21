import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/dbz/components/list/list.component';

import { AddcharacterComponent } from './components/dbz/components/addcharacter/addcharacter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent,AddcharacterComponent,ListComponent,],
  imports: [
    CommonModule,
    FormsModule
    
    
  ],
  exports:[
    MainPageComponent,
    
  ]
})
export class DbzModule { }
