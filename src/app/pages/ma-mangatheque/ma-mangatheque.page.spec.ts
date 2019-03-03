import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaMangathequePage } from './ma-mangatheque.page';

describe('MaMangathequePage', () => {
  let component: MaMangathequePage;
  let fixture: ComponentFixture<MaMangathequePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaMangathequePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaMangathequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
