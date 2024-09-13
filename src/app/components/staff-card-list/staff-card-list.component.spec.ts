import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCardListComponent } from './staff-card-list.component';

describe('StaffCardListComponent', () => {
  let component: StaffCardListComponent;
  let fixture: ComponentFixture<StaffCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
