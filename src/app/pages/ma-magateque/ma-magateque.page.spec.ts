import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaMagatequePage } from './ma-magateque.page';

describe('MaMagatequePage', () => {
  let component: MaMagatequePage;
  let fixture: ComponentFixture<MaMagatequePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaMagatequePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaMagatequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
