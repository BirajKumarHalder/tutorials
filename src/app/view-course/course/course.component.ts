import { HostListener } from '@angular/core';
import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { CourseDetails, TopicDetails } from '../../models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courseId: number;
  courseName: string;
  courseLogo: SafeUrl;
  courseTopics: TopicDetails[];
  selectedTopicId: number;
  previousTopic: TopicDetails;
  nextTopic: TopicDetails;
  editTopic = false;
  navClicked = false;
  windowSize = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowSize = window.innerWidth;
  }

  constructor(private route: ActivatedRoute, private appSvc: AppService) {
    this.courseId = this.route.snapshot.params['courseId'];
    this.selectedTopicId = this.route.snapshot.data.topicId;
    this.retrieveCourseDetails(this.courseId);
  }

  retrieveCourseDetails(courseId: number) {
    this.editTopic = false;
    this.appSvc.getCourseById(courseId).subscribe((courseRes: CourseDetails) => {
      this.courseName = courseRes.courseName;
      this.courseTopics = courseRes.topics;
      this.courseLogo = courseRes.courseLogo;
    })
  }

  recieveSelectedTopicEvent(topicId: number) {
    this.navClicked = false;
    this.selectedTopicId = topicId;
  }

  editTopicEventHandler(topicId: number) {
    this.editTopic = true;
  }

  addEditDeleteTopicEventHandler(topicId: number) {
    this.editTopic = false;
    this.selectedTopicId = topicId;
    this.retrieveCourseDetails(this.courseId);
    this.recieveSelectedTopicEvent(topicId)
  }

  navAction() {
    this.navClicked = !this.navClicked;
  }

}
