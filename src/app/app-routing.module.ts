import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasslistComponent } from './classlist/classlist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';

const routes: Routes = [
  {path:'student',component:StudentlistComponent},
  {path:'teacher',component:TeacherlistComponent},
  {path:'class',component:ClasslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingvar = [StudentlistComponent,TeacherlistComponent]
