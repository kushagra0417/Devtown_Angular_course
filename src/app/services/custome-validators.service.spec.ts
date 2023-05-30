import { TestBed } from '@angular/core/testing';

import { CustomeValidatorsService } from './custome-validators.service';

describe('CustomeValidatorsService', () => {
  let service: CustomeValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
