import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        CounterComponent

    ],
    exports:[
        //que se pueda usar fuera del modulo de counter
        CounterComponent
    ],
    imports:[
        CommonModule
    ]
})
export class CounterModule{

}
