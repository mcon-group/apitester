import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamValueComponent } from './param-value.component';

describe('ParamValueComponent', () => {
  let component: ParamValueComponent;
  let fixture: ComponentFixture<ParamValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
