import { TestBed } from '@angular/core/testing';

import { MiastaService } from './miasta.service';

describe('MiastaService', () => {
  let service: MiastaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiastaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
