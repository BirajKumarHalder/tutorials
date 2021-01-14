import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { CourseDetails, TopicsEntity } from '../models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  course: string;
  courseName: string;
  courseLogo: string;
  courseTopics: TopicsEntity[];
  selectedTopic: TopicsEntity;
  previousTopic: TopicsEntity;
  nextTopic: TopicsEntity;

  constructor(private route: ActivatedRoute, private appSvc: AppService) {
    this.route.params.subscribe(params => {
      this.course = params['course'];
      this.appSvc.getCourseDetails(this.course).subscribe((res: CourseDetails) => {
        this.courseName = res.courseName;
        this.courseTopics = res.topics;
        this.courseLogo = res.courseLogo;
        this.recieveSelectedTopic(res.topics[0]);
      }, err => {
        console.log(err);
      });
    });
  }

  recieveSelectedTopic(topic: TopicsEntity) {
    this.selectedTopic = topic;
    this.courseTopics.forEach((t, index) => {
      if (t.id === this.selectedTopic.id) {
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

}
