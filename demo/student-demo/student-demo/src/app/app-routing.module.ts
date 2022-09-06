import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateFormComponent} from './student-create-form/student-create-form.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';


const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'create', component: StudentCreateFormComponent},
  {path: 'detail/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
