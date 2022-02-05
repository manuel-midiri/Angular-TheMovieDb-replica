/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardCastComponent } from './card-cast.component';

describe('CardCastComponent', () => {
  let component: CardCastComponent;
  let fixture: ComponentFixture<CardCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
