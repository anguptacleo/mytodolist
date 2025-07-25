import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListComponent } from './edit-list.component';

describe('EditList', () => {
  let component: EditListComponent;
  let fixture: ComponentFixture<EditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
