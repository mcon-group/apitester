import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodReturnsComponent } from './method-returns.component';

describe('MethodReturnsComponent', () => {
  let component: MethodReturnsComponent;
  let fixture: ComponentFixture<MethodReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
