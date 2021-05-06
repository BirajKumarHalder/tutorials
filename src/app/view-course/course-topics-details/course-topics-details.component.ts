import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { TopicDetails } from '../../models';

@Component({
  selector: 'app-course-topics-details',
  templateUrl: './course-topics-details.component.html',
  styleUrls: ['./course-topics-details.component.css']
})
export class CourseTopicDetailsComponent implements OnChanges {

  @Input() selectedTopic: TopicDetails;
  @Output() editTopic = new EventEmitter<TopicDetails>();
  topicDetails: TopicDetails;
  topicDetailsReady = false;

  constructor(private appSvc: AppService, private router: Router) { }

  ngOnChanges() {
    this.topicDetailsReady = false;
    if (this.selectedTopic !== null && this.selectedTopic !== undefined) {
      this.appSvc.getTopicById(this.selectedTopic.topicId).subscribe(res => {
        this.topicDetails = res;
        this.topicDetailsReady = true;
      });
    }
  }

  editCourse() {
    this.editTopic.emit(this.selectedTopic);
  }

}
