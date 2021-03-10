import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponentComponent } from './hello-world-component/hello-world-component.component';
import { DataServiceGenService } from './data-service-gen.service';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SampleInputComponent } from './sample-input/sample-input.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponentComponent,
    SearchfilterPipe,
    SampleInputComponent
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
