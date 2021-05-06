import { TestBed } from '@angular/core/testing';

import { ToastedMessageService } from './toasted-message.service';

describe('ToastedMessageService', () => {
  let service: ToastedMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastedMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
