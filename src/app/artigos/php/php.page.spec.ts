import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhpPage } from './php.page';

describe('PhpPage', () => {
  let component: PhpPage;
  let fixture: ComponentFixture<PhpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
