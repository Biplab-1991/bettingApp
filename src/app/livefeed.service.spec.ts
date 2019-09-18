import { TestBed, inject } from '@angular/core/testing';

import { LivefeedService } from './livefeed.service';

describe('LivefeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivefeedService]
    });
  });

  it('should be created', inject([LivefeedService], (service: LivefeedService) => {
    expect(service).toBeTruthy();
  }));
});
