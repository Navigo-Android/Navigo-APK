import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CssPage } from './css.page';

describe('CssPage', () => {
  let component: CssPage;
  let fixture: ComponentFixture<CssPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
