import { TestBed } from '@angular/core/testing';

import { ItemDescService } from './item-desc.service';

describe('ItemDescService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemDescService = TestBed.get(ItemDescService);
    expect(service).toBeTruthy();
  });
});
