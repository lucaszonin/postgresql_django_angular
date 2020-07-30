import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { SearchEmployeesComponent } from './pages/employees/search-employees/search-employees.component';
import { RegisterEmployeesComponent } from './pages/employees/register-employees/register-employees.component';


const routes: Routes = [
  { path: '', component: SearchEmployeesComponent },
  { path: 'search-employees', component: SearchEmployeesComponent },
  { path: 'register-employees', component: RegisterEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
