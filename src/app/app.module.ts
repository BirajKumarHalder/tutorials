import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTopicsNavigationComponent } from './course/course-topics-navigation/course-topics-navigation.component';
import { CourseTopicsComponent } from './course/course-topics/course-topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllCoursesComponent } from './course/all-courses/all-courses.component';
import { ToastedMessageComponent } from './common/toasted-message/toasted-message.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HeaderComponent } from './header/header.component';
import { AddTopicComponent } from './course/add-topic/add-topic.component';
import { EditTopicComponent } from './course/edit-topic/edit-topic.component';
import { PopupModule } from './common/popup/popup.module';
import { ViewCourseComponent } from './course/view-course/view-course.component';
import { TopicDetailsComponent } from './course/topic-details/topic-details.component';
import { AddCourseComponent } from './course/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTopicsComponent,
    CourseTopicsNavigationComponent,
    AllCoursesComponent,
    AddCourseComponent,
    ToastedMessageComponent,
    HeaderComponent,
    AddTopicComponent,
    EditTopicComponent,
    ViewCourseComponent,
    TopicDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    EditorModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
