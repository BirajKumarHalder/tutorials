import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';
import { TopicsEntity } from '../models';

@Component({
  selector: 'app-course-topics-details',
  templateUrl: './course-topics-details.component.html',
  styleUrls: ['./course-topics-details.component.css']
})
export class CourseTopicsDetailsComponent implements OnChanges {

  @Input() courseName: string;
  @Input() selectedTopic: TopicsEntity;
  topicDetails: any;

  constructor(private appSvc: AppService) { }

  ngOnChanges() {
    if (this.selectedTopic !== null && this.selectedTopic !== undefined) {
      this.appSvc.getTopicDetails(this.courseName, this.selectedTopic.file).subscribe(res => {
        this.topicDetails = res;
      });
    }
  }

}
