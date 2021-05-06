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

  courseViewReady = false;
  courseId: number;
  courseName: string;
  courseLogo: SafeUrl;
  courseTopics: TopicDetails[];
  selectedTopic: TopicDetails;
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
    this.courseViewReady = false;
    this.courseId = this.route.snapshot.params['course'];
    this.appSvc.getCurrentTopic().subscribe(topicId => {
      this.editTopic = false;
      this.appSvc.getCourseById(this.courseId).subscribe((courseRes: CourseDetails) => {
        this.courseName = courseRes.courseName;
        this.courseTopics = courseRes.topics;
        this.courseLogo = courseRes.courseLogo;
        this.selectedTopic = courseRes.topics.find(t => t.topicId === topicId);
        this.recieveSelectedTopicEvent(this.selectedTopic);
        this.courseViewReady = true;
      })
    }, err => {
      console.log(err);
    });
  }

  recieveSelectedTopicEvent(topic: TopicDetails) {
    this.navClicked = false;
    this.selectedTopic = topic;
    this.courseTopics.forEach((t, index) => {
      if (t.topicId === this.selectedTopic.topicId) {
        if (index - 1 > -1) {
          this.previousTopic = this.courseTopics[index - 1];
        } else {
          this.previousTopic = null;
        }
        if (index + 1 < this.courseTopics.length) {
          this.nextTopic = this.courseTopics[index + 1];
        } else {
          this.nextTopic = null;
        }
      }
    })
  }

  editTopicEventHandler(topic: TopicDetails) {
    this.editTopic = true;
  }

  navAction() {
    this.navClicked = !this.navClicked;
  }

}
