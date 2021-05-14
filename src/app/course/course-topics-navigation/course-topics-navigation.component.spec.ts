import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopicsNavigationComponent } from './course-topics-navigation.component';

describe('CourseTopicsNavigationComponent', () => {
  let component: CourseTopicsNavigationComponent;
  let fixture: ComponentFixture<CourseTopicsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTopicsNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTopicsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
