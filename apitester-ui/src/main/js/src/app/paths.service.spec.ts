import { TestBed } from '@angular/core/testing';

import { PathsService } from './paths.service';

describe('PathsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathsService = TestBed.get(PathsService);
    expect(service).toBeTruthy();
  });
});
