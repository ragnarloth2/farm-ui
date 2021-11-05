import { TestBed } from '@angular/core/testing';

import { NfeEntryService } from './nfe-entry.service';

describe('NfeEntryService', () => {
  let service: NfeEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NfeEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
