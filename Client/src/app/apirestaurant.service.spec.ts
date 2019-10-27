import { TestBed } from '@angular/core/testing';

import { ApirestaurantService } from './apirestaurant.service';

describe('ApirestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApirestaurantService = TestBed.get(ApirestaurantService);
    expect(service).toBeTruthy();
  });
});
