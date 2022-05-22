import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesS5Component } from './services-s5.component';

describe('ServicesS5Component', () => {
  let component: ServicesS5Component;
  let fixture: ComponentFixture<ServicesS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesS5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
