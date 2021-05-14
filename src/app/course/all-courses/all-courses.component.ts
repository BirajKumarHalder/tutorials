import { Component, OnInit } from '@angular/core';
import { AllCoursesAnimations } from '../../animations';
import { AppService } from 'src/app/app.service';
import { CourseDetails } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
  animations: [AllCoursesAnimations]
})
export class AllCoursesComponent implements OnInit {

  allCourses: CourseDetails[] = [];

  constructor(private appSvc: AppService, private router: Router) { }

  ngOnInit() {
    this.appSvc.getAllCourses().subscribe((response: CourseDetails[]) => {
      this.allCourses = response;
    }, error => {
      console.error(error);
    });
  }

  viewCourse(course: CourseDetails) {
    this.router.navigateByUrl('view-course/' + course.courseId);
  }

}
