import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AllCoursesAnimations } from 'src/app/animations';
import { AppService } from '../../app.service';
import { TopicDetails } from '../../models';

@Component({
  selector: 'app-course-topics-details',
  templateUrl: './course-topics-details.component.html',
  styleUrls: ['./course-topics-details.component.css'],
  animations: [AllCoursesAnimations]
})
export class CourseTopicDetailsComponent implements OnChanges {

  @Input() selectedTopicId: number;
  @Output() editTopic = new EventEmitter<number>();
  topicDetails: TopicDetails;

  constructor(private appSvc: AppService, private router: Router) { }

  ngOnChanges() {
    if (this.selectedTopicId) {
      if (this.selectedTopicId === -1) {
        this.appSvc.getNoTopicContent().subscribe(res => {
          this.topicDetails = res;
        });
      } else {
        this.appSvc.getTopicById(this.selectedTopicId).subscribe(res => {
          this.topicDetails = res;
        });
      }
    }
  }

  editCourse() {
    this.editTopic.emit(this.selectedTopicId);
  }

}
