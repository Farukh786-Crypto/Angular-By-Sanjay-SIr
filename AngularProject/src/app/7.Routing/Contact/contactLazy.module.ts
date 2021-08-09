import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router';
import { ErrorComponent } from '../Error/Error.component';
import { ContactComponent } from './Contact.component';

export const contactroute:Routes=[
    {path:'',component:ContactComponent},
    {path:'**',component:ErrorComponent}
]



@NgModule({

    declarations:[ContactComponent],
    imports:[CommonModule,RouterModule.forChild(contactroute)],
    providers:[],
    exports:[ContactComponent]

})

export class ContactModule{

}










