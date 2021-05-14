import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CourseDetails } from 'src/app/models';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  course: CourseDetails;

  constructor(private route: ActivatedRoute, private appSvc: AppService) {
    const courseId = this.route.snapshot.params['courseId'];
    if (courseId !== null && courseId !== undefined) {
      this.retrieveCoursedetails(courseId);
    }
  }

  retrieveCoursedetails(courseId: number) {
    this.appSvc.getCourseById(courseId).subscribe(courseDetails => {
      this.course = courseDetails;
    }, error => {
      console.error(error);
    });
  }

}
