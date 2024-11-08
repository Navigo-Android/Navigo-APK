import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OraclePage } from './oracle.page';

describe('OraclePage', () => {
  let component: OraclePage;
  let fixture: ComponentFixture<OraclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OraclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
