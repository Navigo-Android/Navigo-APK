import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfjavascriptPage } from './pfjavascript.page';

describe('PfjavascriptPage', () => {
  let component: PfjavascriptPage;
  let fixture: ComponentFixture<PfjavascriptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfjavascriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
