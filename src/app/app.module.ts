import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServiceGenService } from './data-service-gen.service';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchfilterPipe,
    SigninFormComponent,
    SignupFormComponent,
],
  imports: [
    BrowserModule,
      AppRoutingModule,
        FormsModule
  ],
  providers: [DataServiceGenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
