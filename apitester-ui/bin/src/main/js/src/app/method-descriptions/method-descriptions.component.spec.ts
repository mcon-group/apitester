import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodDescriptionsComponent } from './method-descriptions.component';

describe('MethodDescriptionsComponent', () => {
  let component: MethodDescriptionsComponent;
  let fixture: ComponentFixture<MethodDescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodDescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
