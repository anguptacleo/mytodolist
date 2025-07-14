import { ComponentFixture, TestBed } from '@angular/core/testing';  // ✅ Needed for testing
import { MytodolistComponent } from './mytodolist.component';       // ✅ Your component

describe('MytodolistComponent', () => {
  let component: MytodolistComponent;
  let fixture: ComponentFixture<MytodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytodolistComponent]  // ✅ Importing the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(MytodolistComponent);  // ✅ Create fixture
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // ✅ Basic sanity check
  });
});

