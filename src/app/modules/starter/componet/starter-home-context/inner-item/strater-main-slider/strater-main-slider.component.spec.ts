import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StraterMainSliderComponent } from './strater-main-slider.component';

describe('StraterMainSliderComponent', () => {
  let component: StraterMainSliderComponent;
  let fixture: ComponentFixture<StraterMainSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StraterMainSliderComponent]
    });
    fixture = TestBed.createComponent(StraterMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
