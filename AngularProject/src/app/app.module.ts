import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColleageComponent } from './1.Component/Colleage/colleage.component';
import { DirectivesComponent } from './2.Directives/Directive/directive.component';
import { BindingComponent } from './3.Binding/binding.component';
import { CubePipeComponent } from './4.Pipe/custom pipes/cube.pipe';
import { PipeComponent } from './4.Pipe/pipe/pipe.component';
import { TemplateComponent } from './5.Forms/5.1.template driven forms/template.component';
import { ModelDrivenComponent } from './5.Forms/5.2.Model driven forms/modeldriven.component';
import { StudentServiceComponent } from './6.Services/service.component';
import { StudentService } from './6.Services/student.service';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './7.Routing/Home/Home.component';
import { AboutComponent } from './7.Routing/About/About.component';
import { ContactComponent } from './7.Routing/Contact/Contact.component';
import { Myroute } from './7.Routing/route.config';
import { ErrorComponent } from './7.Routing/Error/Error.component';
import { VisionComponent } from './7.Routing/Vision/Vision.component';
import { AuthenticationService } from './7.Routing/RouteGuard/authentication.service';
import { activateService } from './7.Routing/RouteGuard/childActivate.service';
import { ParentComponent } from './8.Component Communication/Parent.component';
import { ChildComponent } from './8.Component Communication/Child.component';

@NgModule({
  // step 5 : Register Your component
  declarations: [
    AppComponent,
    ColleageComponent,
    DirectivesComponent,
    BindingComponent,     
    PipeComponent,        // Register pipe
    CubePipeComponent,    // Register custom pipes
    TemplateComponent,
    ModelDrivenComponent,
    StudentServiceComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    VisionComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Myroute)
  ],
  providers: [AuthenticationService,activateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
