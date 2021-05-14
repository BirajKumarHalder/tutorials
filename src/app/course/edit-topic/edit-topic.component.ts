import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { TopicDetails } from 'src/app/models';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css']
})
export class EditTopicComponent {

  topicDetailsReady: boolean;
  selectedTopicId: number;
  topicDetails: TopicDetails;
  topicForm: FormGroup;

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

  constructor(private router: Router, private route: ActivatedRoute, private appSvc: AppService) {
    this.route.params.subscribe(params => {
      this.selectedTopicId = params['topicId'];
      this.createTopicForm();
    });
  }

  createTopicForm() {
    this.topicDetailsReady = false;
    this.topicForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      content: new FormControl('', Validators.compose([Validators.required]))
    });
    this.appSvc.getTopicById(this.selectedTopicId).subscribe(res => {
      this.topicDetails = res;
      this.topicForm.patchValue(res);
      this.topicDetailsReady = true;
    });
  }

  submitTopic() {
    let topic: any = {};
    topic.courseId = this.topicDetails.courseId;
    topic.topicId = this.topicDetails.topicId;
    topic.topicOrder = this.topicDetails.order;
    topic.topicName = this.topicForm.controls.name.value;
    topic.topicContent = this.topicForm.controls.content.value;
    this.appSvc.updateTopic(topic).subscribe(savedTopic => {
      this.router.navigate(['view-course', this.topicDetails.courseId, { outlets: { topicDetails: ['topic', this.selectedTopicId] } }]);
    }, error => {
      console.error(error);
      this.router.navigate(['view-course', this.topicDetails.courseId, { outlets: { topicDetails: ['topic', this.selectedTopicId] } }]);
    });
  }

  cancelEdit() {
    this.router.navigate(['view-course', this.topicDetails.courseId, { outlets: { topicDetails: ['topic', this.selectedTopicId] } }]);
  }

}
