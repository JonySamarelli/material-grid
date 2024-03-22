import { Routes } from '@angular/router';
import { SempreComponent } from './component/sempre/sempre.component';
import { SgpComponent } from './component/sgp/sgp.component';
import { EvaComponent } from './component/eva/eva.component';
import { NewContentComponent } from './component/new-content/new-content.component';

export const routes: Routes = [
    { path: 'sempre', component: SempreComponent },
    { path: 'sgp', component: SgpComponent },
    { path: 'eva', component: EvaComponent },
    { path: 'home', component: NewContentComponent},
    { path: '**', redirectTo: 'home'},
];
