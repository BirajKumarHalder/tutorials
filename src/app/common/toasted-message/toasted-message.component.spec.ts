import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastedMessageComponent } from './toasted-message.component';

describe('ToastedMessageComponent', () => {
  let component: ToastedMessageComponent;
  let fixture: ComponentFixture<ToastedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastedMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
