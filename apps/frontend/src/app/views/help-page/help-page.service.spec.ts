/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HelpPageService } from './help-page.service';

describe('Service: HelpPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelpPageService]
    });
  });

  it('should ...', inject([HelpPageService], (service: HelpPageService) => {
    expect(service).toBeTruthy();
  }));
});
