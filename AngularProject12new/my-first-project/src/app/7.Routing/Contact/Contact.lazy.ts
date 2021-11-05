import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { ContactComponent } from './Contact.component';
import {Routes} from '@angular/router'

export const contactroute:Routes=[
    {path:'',component:ContactComponent}
]

@NgModule({
    declarations:[ContactComponent],
    imports:[CommonModule,RouterModule.forChild(contactroute)],
    providers:[],
    exports:[ContactComponent]
})

export class ContactLazyModule{

}











