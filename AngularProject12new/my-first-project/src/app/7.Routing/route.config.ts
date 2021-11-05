import {Routes} from '@angular/router'
import { AboutComponent } from './About/About.component'
import { GoalComponent } from './goal/goal.component'
import { HomeComponent } from './Home/Home.component'
import { MissionComponent } from './mission/mission.component'
import { AuthenticationService } from './RouteGuard/authentication.service'
import { AuthorizeClass } from './RouteGuard/authorized.service'
import { VisionComponent } from './Vision/Vision.component'

export const myroute:Routes=[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent , canActivate:[AuthenticationService],
    canActivateChild:[AuthorizeClass],
    children:[
        {path:'vision',component:VisionComponent},
        {path:'mission',component:MissionComponent},
        {path:'goal',component:GoalComponent}
    ]},
    {path:'contact',loadChildren:()=>import('./Contact/Contact.lazy').then(m=>m.ContactLazyModule)}
]





