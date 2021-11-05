import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomExpanderComponent } from './custom-expander.component';

describe('CustomExpanderComponent', () => {
  let component: CustomExpanderComponent;
  let fixture: ComponentFixture<CustomExpanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomExpanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomExpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
