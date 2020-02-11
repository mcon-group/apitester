import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodHeaderComponent } from './method-header.component';

describe('MethodHeaderComponent', () => {
  let component: MethodHeaderComponent;
  let fixture: ComponentFixture<MethodHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
