import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course/Angular',
    pathMatch: 'full'
  }, {
    path: 'course',
    component: AllCoursesComponent
  }, {
    path: 'course/:course',
    component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
