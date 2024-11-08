import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfcPage } from './pfc.page';

describe('PfcPage', () => {
  let component: PfcPage;
  let fixture: ComponentFixture<PfcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
