import { TestBed } from '@angular/core/testing';

import { ConfermationGuard } from './confermation.guard';

describe('ConfermationGuard', () => {
  let guard: ConfermationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfermationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
