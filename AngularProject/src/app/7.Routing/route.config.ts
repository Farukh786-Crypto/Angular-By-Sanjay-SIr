import {Routes} from '@angular/router'
import { AboutComponent } from './About/About.component'
import { VisionComponent } from './Vision/Vision.component'
import { ContactComponent } from './Contact/Contact.component'
import { ErrorComponent } from './Error/Error.component'
import { HomeComponent } from './Home/Home.component'
import { AuthenticationService } from './RouteGuard/authentication.service'
import { activateService } from './RouteGuard/childActivate.service'


export const Myroute:Routes=[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent,canActivate:[AuthenticationService],canActivateChild:[activateService],children:[
        {path:'vision',component:VisionComponent}
    ]},
    {path:'contact',loadChildren: () => import('./Contact/contactLazy.module').then(m => m.ContactModule)},
    {path:'**',component:ErrorComponent}
]













