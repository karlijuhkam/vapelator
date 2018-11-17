import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kalk1Component } from './kalk1.component';

describe('Kalk1Component', () => {
  let component: Kalk1Component;
  let fixture: ComponentFixture<Kalk1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kalk1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kalk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
