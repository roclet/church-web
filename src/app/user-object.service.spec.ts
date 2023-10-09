import { TestBed } from '@angular/core/testing';

import { UserObjectService } from './user-object.service';

describe('UserObjectService', () => {
  let service: UserObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
