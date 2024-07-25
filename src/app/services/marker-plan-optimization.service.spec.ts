import { TestBed } from '@angular/core/testing';

import { MarkerPlanOptimizationService } from './marker-plan-optimization.service';

describe('MarkerPlanOptimizationService', () => {
  let service: MarkerPlanOptimizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerPlanOptimizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
