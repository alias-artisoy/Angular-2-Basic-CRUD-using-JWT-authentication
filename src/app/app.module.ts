import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from "./services/auth.service";
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { SpeechDetailsComponent } from './speech-details/speech-details.component';
import { SpeechesComponent } from './speeches/speeches.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    SpeechDetailsComponent,
    SpeechesComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
