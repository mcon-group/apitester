import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodReturnStatusComponent } from './method-return-status.component';

describe('MethodReturnStatusComponent', () => {
  let component: MethodReturnStatusComponent;
  let fixture: ComponentFixture<MethodReturnStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodReturnStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodReturnStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
