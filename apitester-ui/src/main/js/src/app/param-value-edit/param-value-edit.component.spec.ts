import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamValueEditComponent } from './param-value-edit.component';

describe('ParamValueEditComponent', () => {
  let component: ParamValueEditComponent;
  let fixture: ComponentFixture<ParamValueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamValueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamValueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
