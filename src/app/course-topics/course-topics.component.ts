import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TopicsEntity } from '../models';

@Component({
  selector: 'app-course-topics',
  templateUrl: './course-topics.component.html',
  styleUrls: ['./course-topics.component.css']
})
export class CourseTopicsComponent {

  @Input() courseLogo: string;
  @Input() courseTopics: TopicsEntity[];
  @Input() selectedTopic: TopicsEntity;
  @Output() selectedTopicEvent = new EventEmitter<TopicsEntity>();

  selectTopic(topic: TopicsEntity) {
    this.selectedTopicEvent.emit(topic);
  }

}
