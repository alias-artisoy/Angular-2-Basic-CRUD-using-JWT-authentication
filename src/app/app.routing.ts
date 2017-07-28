import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';


const APP_ROUTES: Routes = [
    { path: 'signin', component:SigninComponent},
    { path: 'signup', component:SignupComponent},
    { path: 'home', component:HomeComponent},
    { path: '', component:MainComponent}        
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
 

