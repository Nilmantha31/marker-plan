import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerPlanComponent } from './marker-plan.component';

describe('MarkerPlanComponent', () => {
  let component: MarkerPlanComponent;
  let fixture: ComponentFixture<MarkerPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkerPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkerPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
