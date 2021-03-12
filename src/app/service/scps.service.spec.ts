import { TestBed } from '@angular/core/testing';

import { ScpsService } from './scps.service';

describe('ScpsService', () => {
  let service: ScpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
