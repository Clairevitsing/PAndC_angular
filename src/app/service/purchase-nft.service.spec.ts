import { TestBed } from '@angular/core/testing';

import { PurchaseNftService } from './purchase-nft.service';

describe('PurchaseNftService', () => {
  let service: PurchaseNftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseNftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
