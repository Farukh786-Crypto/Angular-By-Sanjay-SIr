import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColleageComponent } from './1.Component/colleage.component';
import { DirectivesComponent } from './2.Directives/directive.component';
import { BindingComponent } from './3.Binding/Binding.component';
import { CubePipe } from './4.Pipe/cube.pipe';
import { PipeComponent } from './4.Pipe/Pipe.component';
import { ModelDrivenComp } from './5.Forms/modeldriven.component';
import { ServiceComponent } from './6.Services/service.component';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserServiceComp } from './6.Services/user.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './7.Routing/Home/Home.component';
import { AboutComponent } from './7.Routing/About/About.component';
import { myroute } from './7.Routing/route.config';
import { VisionComponent } from './7.Routing/Vision/Vision.component';
import { ParentComponent } from './8.Component Communications/Parent.component';
import { ChildComponent } from './8.Component Communications/Child.component';
import { AuthenticationService } from './7.Routing/RouteGuard/authentication.service';
import { AuthorizeClass } from './7.Routing/RouteGuard/authorized.service';
import { MissionComponent } from './7.Routing/mission/mission.component';
import { GoalComponent } from './7.Routing/goal/goal.component';

@NgModule({
  declarations: [
    AppComponent,
    ColleageComponent,
    DirectivesComponent,
    BindingComponent,
    PipeComponent,
    CubePipe,
    ModelDrivenComp,
    ServiceComponent,
    HomeComponent,
    AboutComponent,
    VisionComponent,
    ParentComponent,
    ChildComponent,
    MissionComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [UserServiceComp,AuthenticationService,AuthorizeClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
