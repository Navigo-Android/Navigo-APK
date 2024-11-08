import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfphpPage } from './pfphp.page';

describe('PfphpPage', () => {
  let component: PfphpPage;
  let fixture: ComponentFixture<PfphpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfphpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
