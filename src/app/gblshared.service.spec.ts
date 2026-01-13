import { TestBed } from '@angular/core/testing';

import { GblsharedService } from './gblshared.service';

describe('GblsharedService', () => {
  let service: GblsharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GblsharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
