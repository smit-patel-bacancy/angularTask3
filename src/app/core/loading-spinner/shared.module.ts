import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoadingSpinnerComponent } from "./loading-spinner.component";

@NgModule({
    declarations:[LoadingSpinnerComponent],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        LoadingSpinnerComponent,
        CommonModule,
        FormsModule
    ]

})

export class SharedModule{
    
}