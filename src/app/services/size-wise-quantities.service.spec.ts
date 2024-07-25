import { TestBed } from '@angular/core/testing';

import { SizeWiseQuantitiesService } from './size-wise-quantities.service';

describe('SizeWiseQuantitiesService', () => {
  let service: SizeWiseQuantitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeWiseQuantitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
