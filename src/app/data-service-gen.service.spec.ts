import { TestBed } from '@angular/core/testing';

import { DataServiceGenService } from './data-service-gen.service';

describe('DataServiceGenService', () => {
  let service: DataServiceGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
