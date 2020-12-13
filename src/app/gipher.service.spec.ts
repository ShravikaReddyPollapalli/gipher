import { TestBed, inject } from '@angular/core/testing';

import { GipherService } from './gipher.service';

describe('GipherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GipherService]
    });
  });

  it('should be created', inject([GipherService], (service: GipherService) => {
    expect(service).toBeTruthy();
  }));
});
