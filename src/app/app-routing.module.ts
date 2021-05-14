import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppResolverService } from './app-resolver.service';
import { AllCoursesComponent } from './course/all-courses/all-courses.component';
import { EditTopicComponent } from './course/edit-topic/edit-topic.component';
import { TopicDetailsComponent } from './course/topic-details/topic-details.component';
import { ViewCourseComponent } from './course/view-course/view-course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course',
    pathMatch: 'full'
  }, {
    path: 'course',
    component: AllCoursesComponent
  }, {
    path: 'view-course/:courseId',
    component: ViewCourseComponent,
    resolve: { topicId: AppResolverService },
    children: [
      {
        path: 'topic/:topicId',
        component: TopicDetailsComponent,
        outlet: 'topicDetails'
      }, {
        path: 'edit/:topicId',
        component: EditTopicComponent,
        outlet: 'topicDetails'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
