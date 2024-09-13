import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardListComponent } from './info-card-list.component';

describe('InfoCardListComponent', () => {
  let component: InfoCardListComponent;
  let fixture: ComponentFixture<InfoCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
