import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdateDiffusionComponent } from './udate-diffusion.component';

describe('UdateDiffusionComponent', () => {
  let component: UdateDiffusionComponent;
  let fixture: ComponentFixture<UdateDiffusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdateDiffusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdateDiffusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
