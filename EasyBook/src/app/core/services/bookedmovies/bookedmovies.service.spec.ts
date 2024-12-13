import { TestBed } from '@angular/core/testing';

import { BookedmoviesService } from './bookedmovies.service';

describe('BookedmoviesService', () => {
  let service: BookedmoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookedmoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
