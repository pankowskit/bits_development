import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesS3Component } from './services-s3.component';

describe('ServicesS3Component', () => {
  let component: ServicesS3Component;
  let fixture: ComponentFixture<ServicesS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
