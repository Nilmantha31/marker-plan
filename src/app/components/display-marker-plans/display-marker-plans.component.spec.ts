import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMarkerPlansComponent } from './display-marker-plans.component';

describe('DisplayMarkerPlansComponent', () => {
  let component: DisplayMarkerPlansComponent;
  let fixture: ComponentFixture<DisplayMarkerPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayMarkerPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayMarkerPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
