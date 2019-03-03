import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasPage } from './mangas.page';

describe('MangasPage', () => {
  let component: MangasPage;
  let fixture: ComponentFixture<MangasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
