import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeriePage } from './update-serie.page';

describe('UpdateSeriePage', () => {
  let component: UpdateSeriePage;
  let fixture: ComponentFixture<UpdateSeriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSeriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
