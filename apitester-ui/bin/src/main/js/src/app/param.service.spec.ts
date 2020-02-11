import { TestBed } from '@angular/core/testing';

import { ParamService } from './param.service';

describe('ParamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParamService = TestBed.get(ParamService);
    expect(service).toBeTruthy();
  });
});
