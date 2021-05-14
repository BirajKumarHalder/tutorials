import { Component, HostListener, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { TopicDetails, CourseDetails } from 'src/app/models';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courseId: number;
  selectedTopicId: number;
  courseName: string;
  courseLogo: SafeUrl;
  courseTopics: TopicDetails[];

  navClicked = false;
  windowSize = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowSize = window.innerWidth;
  }
  navAction() {
    this.navClicked = !this.navClicked;
  }

  constructor(private router: Router, private route: ActivatedRoute, private appSvc: AppService) {
    this.courseId = this.route.snapshot.params['courseId'];
    this.selectedTopicId = this.route.snapshot.data.topicId;
    this.retrieveCourseDetails(this.courseId);
  }

  ngOnInit(): void {
    this.router.navigate(['view-course', this.courseId, { outlets: { topicDetails: ['topic', this.selectedTopicId] } }]);
  }

  retrieveCourseDetails(courseId: number) {
    this.appSvc.getCourseById(courseId).subscribe((courseRes: CourseDetails) => {
      this.courseName = courseRes.courseName;
      this.courseTopics = courseRes.topics;
      this.courseLogo = courseRes.courseLogo;
    })
  }

  recieveSelectedTopicEvent(topicId: number) {
    this.navClicked = false;
    this.selectedTopicId = topicId;
    this.router.navigate(['view-course', this.courseId, { outlets: { topicDetails: ['topic', this.selectedTopicId] } }]);
  }

  addEditDeleteTopicEventHandler(topicId: number) {
    this.selectedTopicId = topicId;
    this.retrieveCourseDetails(this.courseId);
    this.router.navigate(['view-course', this.courseId, { outlets: { topicDetails: ['topic', this.selectedTopicId] } }]);
  }


}
