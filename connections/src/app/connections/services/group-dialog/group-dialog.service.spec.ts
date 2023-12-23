import { TestBed } from '@angular/core/testing';

import { GroupDialogService } from './group-dialog.service';

describe('GroupDialogService', () => {
  let service: GroupDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
