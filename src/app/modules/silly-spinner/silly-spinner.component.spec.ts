import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillySpinnerComponent } from './silly-spinner.component';

describe('SillySpinnerComponent', () => {
  let component: SillySpinnerComponent;
  let fixture: ComponentFixture<SillySpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillySpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillySpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
