import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Products1Component } from './products1.component';

describe('Products1Component', () => {
  let component: Products1Component;
  let fixture: ComponentFixture<Products1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Products1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Products1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
