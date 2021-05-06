import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PopupService } from 'src/app/common/popup.service';
import { TopicDetails } from '../../models';

@Component({
  selector: 'app-course-topics',
  templateUrl: './course-topics.component.html',
  styleUrls: ['./course-topics.component.css'],
})
export class CourseTopicsComponent {

  @Input() courseTopics: TopicDetails[];
  @Input() selectedTopic: TopicDetails;
  @Output() selectedTopicEvent = new EventEmitter<TopicDetails>();

  constructor(private appSvc: AppService, private popupSvc: PopupService) { }

  selectTopic(topic: TopicDetails) {
    this.selectedTopicEvent.emit(topic);
  }

  deleteTopic(topic: TopicDetails) {
    this.popupSvc.confirmThis("Are you sure to delete?", function () {
      alert("Yes clicked");
      this.appSvc.deleteTopic(topic).subscribe(res => {
        console.log(res);
      }, error => {
        console.error(error);
      })
    }, function () {
      alert("No clicked");
    })

  }

}
