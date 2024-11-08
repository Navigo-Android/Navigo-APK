import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PforaclePage } from './pforacle.page';

describe('PforaclePage', () => {
  let component: PforaclePage;
  let fixture: ComponentFixture<PforaclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PforaclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
