import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TopicsEntity } from '../models';

@Component({
  selector: 'app-course-topics-navigation',
  templateUrl: './course-topics-navigation.component.html',
  styleUrls: ['./course-topics-navigation.component.css']
})
export class CourseTopicsNavigationComponent {

  @Input() previousTopic: TopicsEntity;
  @Input() nextTopic: TopicsEntity;
  @Output() selectedTopicEvent = new EventEmitter<TopicsEntity>();

  selectTopic(topic: TopicsEntity) {
    this.selectedTopicEvent.emit(topic);
  }

}
