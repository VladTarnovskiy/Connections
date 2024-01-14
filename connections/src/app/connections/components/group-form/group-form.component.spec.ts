import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFormComponent } from './group-form.component';

describe('GroupFormComponent', () => {
  let component: GroupFormComponent;
  let fixture: ComponentFixture<GroupFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupFormComponent]
    });
    fixture = TestBed.createComponent(GroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
