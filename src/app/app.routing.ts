import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { SpeechesComponent } from './speeches/speeches.component';
import { SpeechDetailsComponent } from './speech-details/speech-details.component';


const APP_ROUTES: Routes = [
    { path: 'speeches', component:SpeechesComponent},
    { path: 'speechdetails', component:SpeechDetailsComponent},
    { path: '', component:SpeechesComponent}        
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
 

