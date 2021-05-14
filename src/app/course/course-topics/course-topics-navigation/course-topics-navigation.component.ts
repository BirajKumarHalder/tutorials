import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { TopicDetails } from '../../models';

@Component({
  selector: 'app-course-topics-navigation',
  templateUrl: './course-topics-navigation.component.html',
  styleUrls: ['./course-topics-navigation.component.css']
})
export class CourseTopicsNavigationComponent implements OnChanges {

  @Input() courseTopics: TopicDetails[];
  @Input() selectedTopicId: number;
  previousTopic: TopicDetails;
  nextTopic: TopicDetails;
  @Output() selectedTopicEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.courseTopics && this.selectedTopicId) {
      this.courseTopics.forEach((t, index) => {
        if (t.topicId === this.selectedTopicId) {
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

  selectTopic(topic: TopicDetails) {
    this.selectedTopicEvent.emit(topic.topicId);
  }

}
