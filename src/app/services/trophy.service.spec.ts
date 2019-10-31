import { TestBed } from '@angular/core/testing';

import { TrophyService } from './trophy.service';

describe('TrophyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrophyService = TestBed.get(TrophyService);
    expect(service).toBeTruthy();
  });
});
