import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VuePage } from './vue.page';

describe('VuePage', () => {
  let component: VuePage;
  let fixture: ComponentFixture<VuePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
