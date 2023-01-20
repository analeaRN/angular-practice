import { TestBed } from '@angular/core/testing';

import { SessionStatsService } from './session-stats.service';

describe('SessionStatsService', () => {
  let service: SessionStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
