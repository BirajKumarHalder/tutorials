import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTopicDetailsComponent } from './view-course/course-topics-details/course-topics-details.component';
import { CourseTopicsNavigationComponent } from './view-course/course-topics-navigation/course-topics-navigation.component';
import { CourseTopicsComponent } from './view-course/course-topics/course-topics.component';
import { CourseComponent } from './view-course/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllCoursesComponent } from './view-course/all-courses/all-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ToastedMessageComponent } from './common/toasted-message/toasted-message.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HeaderComponent } from './header/header.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { PopupModule } from './common/popup/popup.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseTopicsComponent,
    CourseTopicDetailsComponent,
    CourseComponent,
    CourseTopicsNavigationComponent,
    AllCoursesComponent,
    AddCourseComponent,
    ToastedMessageComponent,
    HeaderComponent,
    AddTopicComponent,
    EditTopicComponent
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
