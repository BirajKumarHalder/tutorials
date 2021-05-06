import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { TopicDetails } from '../models';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css']
})
export class EditTopicComponent {

  @Input() selectedTopic: TopicDetails;
  topicForm: FormGroup;
  html = '';
  topicDetailsReady = false;

  editorConfig = {
    height: 500,
    branding: false,
    warning: false,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor underline | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
  }

  constructor(private appSvc: AppService) {
    this.createTopicForm();
  }

  ngOnChanges() {
    this.topicDetailsReady = false;
    if (this.selectedTopic !== null && this.selectedTopic !== undefined) {
      this.appSvc.getTopicById(this.selectedTopic.topicId).subscribe(res => {
        this.topicForm.patchValue(res);
        this.topicDetailsReady = true;
      });
    }
  }

  createTopicForm() {
    this.topicForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      content: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  submitTopic() {
    let topic: any = {};
    topic.courseId = this.selectedTopic.courseId;
    topic.topicId = this.selectedTopic.topicId;
    topic.topicOrder = this.selectedTopic.order;
    topic.topicName = this.topicForm.controls.name.value;
    topic.topicContent = this.topicForm.controls.content.value;
    this.appSvc.updateTopic(topic).subscribe(savedTopic => {
      this.appSvc.setCurrentTopic(savedTopic.topicId);
    }, error => {
      console.error(error);
    });
  }

  cancelEdit() {
    this.appSvc.setCurrentTopic(this.selectedTopic.topicId);
  }

}
