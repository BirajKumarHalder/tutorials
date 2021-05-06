import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent {

  courseId: string;
  topicForm: FormGroup;

  constructor(private route: ActivatedRoute, private appSvc: AppService) {
    this.courseId = this.route.snapshot.params['course'];
    this.createTopicForm();
  }

  createTopicForm() {
    this.topicForm = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  submitTopic() {
    let topic: any = {};
    topic.courseId = this.courseId;
    topic.topicName = this.topicForm.controls.name.value;
    this.appSvc.addTopic(topic).subscribe(savedTopic => {
      this.topicForm.reset();
      this.appSvc.setCurrentTopic(savedTopic.topicId);
    }, error => {
      console.log(error)
    });
  }

}
