import { Routes } from '@angular/router';
import { EmployeeSearchComponent } from './pages/employee-search/employee-search.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', component: EmployeeSearchComponent},
    { path: 'about', component: AboutComponent}
];
