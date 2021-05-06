import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TopicDetails } from '../../models';

@Component({
  selector: 'app-course-topics-navigation',
  templateUrl: './course-topics-navigation.component.html',
  styleUrls: ['./course-topics-navigation.component.css']
})
export class CourseTopicsNavigationComponent {

  @Input() previousTopic: TopicDetails;
  @Input() nextTopic: TopicDetails;
  @Output() selectedTopicEvent = new EventEmitter<TopicDetails>();

  selectTopic(topic: TopicDetails) {
    this.selectedTopicEvent.emit(topic);
  }

}
