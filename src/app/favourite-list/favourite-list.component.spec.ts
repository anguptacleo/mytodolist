import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteListComponent } from './favourite-list.component';

describe('FavouriteList', () => {
  let component: FavouriteListComponent;
  let fixture: ComponentFixture<FavouriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
