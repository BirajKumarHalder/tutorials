import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllCoursesAnimations } from 'src/app/animations';
import { AppService } from 'src/app/app.service';
import { TopicDetails } from 'src/app/models';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css'],
  animations: [AllCoursesAnimations]
})
export class TopicDetailsComponent {

  selectedTopicId: number;
  topicDetails: TopicDetails;

  constructor(private router: Router, private route: ActivatedRoute, private appSvc: AppService) {
    this.route.params.subscribe(params => {
      this.selectedTopicId = params['topicId'];
      this.getTopicDetails(this.selectedTopicId);
    });
  }

  getTopicDetails(topicId: number) {
    if (topicId === -1) {
      this.appSvc.getNoTopicContent().subscribe(res => {
        this.topicDetails = res;
      });
    } else {
      this.appSvc.getTopicById(topicId).subscribe(res => {
        this.topicDetails = res;
      });
    }
  }

  editCourse() {
    this.router.navigate(['view-course', this.topicDetails.courseId, { outlets: { topicDetails: ['edit', this.selectedTopicId] } }]);
  }

}
