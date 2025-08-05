import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantChatboxComponent } from './assistant-chatbox.component';

describe('AssistantChatbox', () => {
  let component: AssistantChatboxComponent;
  let fixture: ComponentFixture<AssistantChatboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantChatboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
