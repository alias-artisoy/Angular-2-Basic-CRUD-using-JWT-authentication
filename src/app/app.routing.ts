import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const APP_ROUTES: Routes = [
    { path: '', component:SigninComponent},
    { path: 'signup', component:SignupComponent}    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
 

