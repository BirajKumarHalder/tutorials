import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css']
})
export class CourseTitleComponent {

  @Input() courseName: string;

  constructor() { }

}
