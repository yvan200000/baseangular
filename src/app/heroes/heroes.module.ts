


import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent

    ],
    exports: [
        //que se pueda usar fuera del modulo de counter
        ListComponent,
        HeroComponent
    ],imports:[
        CommonModule
    ]
})

export class HeroesModule {

}