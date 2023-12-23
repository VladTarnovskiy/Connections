import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationRemoveComponent } from './conversation-remove.component';

describe('ConversationRemoveComponent', () => {
  let component: ConversationRemoveComponent;
  let fixture: ComponentFixture<ConversationRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationRemoveComponent]
    });
    fixture = TestBed.createComponent(ConversationRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
