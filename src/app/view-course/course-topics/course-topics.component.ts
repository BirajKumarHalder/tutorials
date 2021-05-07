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
  @Input() selectedTopicId: number;
  @Output() selectedTopicEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private appSvc: AppService, private popupSvc: PopupService) { }

  selectTopic(topic: TopicDetails) {
    this.selectedTopicEvent.emit(topic.topicId);
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
