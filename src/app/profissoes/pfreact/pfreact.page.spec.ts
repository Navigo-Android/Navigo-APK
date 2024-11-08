import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfreactPage } from './pfreact.page';

describe('PfreactPage', () => {
  let component: PfreactPage;
  let fixture: ComponentFixture<PfreactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfreactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
