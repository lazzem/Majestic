import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiffusionComponent } from './add-diffusion.component';

describe('AddDiffusionComponent', () => {
  let component: AddDiffusionComponent;
  let fixture: ComponentFixture<AddDiffusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiffusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiffusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
