import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopicsDetailsComponent } from './course-topics-details.component';

describe('CourseTopicsDetailsComponent', () => {
  let component: CourseTopicsDetailsComponent;
  let fixture: ComponentFixture<CourseTopicsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTopicsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTopicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
