import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AllCoursesAnimations } from 'src/app/animations';
import { AppService } from 'src/app/app.service';
import { PopupService } from 'src/app/common/popup/popup.service';
import { TopicDetails } from '../../models';

@Component({
  selector: 'app-course-topics',
  templateUrl: './course-topics.component.html',
  styleUrls: ['./course-topics.component.css'],
  animations: [AllCoursesAnimations]
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
    const appSvcInstance = this.appSvc;
    const deleteEventInstance = this.deleteEvent;
    let topicIdToEmit = -1;
    if (this.selectedTopicId === topic.topicId && this.courseTopics?.length > 0) {
      if (topic.topicId !== this.courseTopics[0].topicId) {
        topicIdToEmit = this.courseTopics[0].topicId;
      }
    }
    this.popupSvc.confirmThis("Are you sure to delete?", function () {
      appSvcInstance.deleteTopic(topic).subscribe(res => {
        console.log(res);
        deleteEventInstance.emit(topicIdToEmit);
      }, error => {
        console.error(error);
      })
    }, function () {
    })
  }

}
