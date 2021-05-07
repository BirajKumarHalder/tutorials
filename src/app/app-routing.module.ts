import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppResolverService } from './app-resolver.service';
import { AllCoursesComponent } from './view-course/all-courses/all-courses.component';
import { CourseComponent } from './view-course/course/course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course/view',
    pathMatch: 'full'
  }, {
    path: 'course/view',
    component: AllCoursesComponent
  }, {
    path: 'course/view/:courseId',
    component: CourseComponent,
    resolve: { topicId: AppResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
