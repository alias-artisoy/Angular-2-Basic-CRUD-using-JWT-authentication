import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
    { path: '', component:SigninComponent},
    { path: 'signup', component:SignupComponent},
    { path: 'home', component:HomeComponent}    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
 

