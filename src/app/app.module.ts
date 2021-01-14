import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CourseTopicsComponent } from './course-topics/course-topics.component';
import { CourseTopicsDetailsComponent } from './course-topics-details/course-topics-details.component';
import { CourseComponent } from './course/course.component';
import { CourseTopicsNavigationComponent } from './course-topics-navigation/course-topics-navigation.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    CourseTitleComponent,
    CourseTopicsComponent,
    CourseTopicsDetailsComponent,
    CourseComponent,
    CourseTopicsNavigationComponent,
    AllCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
