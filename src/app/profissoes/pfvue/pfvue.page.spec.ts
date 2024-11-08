import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfvuePage } from './pfvue.page';

describe('PfvuePage', () => {
  let component: PfvuePage;
  let fixture: ComponentFixture<PfvuePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfvuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
