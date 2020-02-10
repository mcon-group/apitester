import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodControllerComponent } from './method-controller.component';

describe('MethodControllerComponent', () => {
  let component: MethodControllerComponent;
  let fixture: ComponentFixture<MethodControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
