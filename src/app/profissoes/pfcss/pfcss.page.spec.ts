import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfcssPage } from './pfcss.page';

describe('PfcssPage', () => {
  let component: PfcssPage;
  let fixture: ComponentFixture<PfcssPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfcssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
