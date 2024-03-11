import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StraterMainServicesComponent } from './strater-main-services.component';

describe('StraterMainServicesComponent', () => {
  let component: StraterMainServicesComponent;
  let fixture: ComponentFixture<StraterMainServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StraterMainServicesComponent]
    });
    fixture = TestBed.createComponent(StraterMainServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
