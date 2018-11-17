import { TestBed } from '@angular/core/testing';

import { OrganisationApiService } from './organisation-api.service';

describe('OrganisationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganisationApiService = TestBed.get(OrganisationApiService);
    expect(service).toBeTruthy();
  });
});
