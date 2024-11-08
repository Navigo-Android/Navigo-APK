import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularPage } from './angular.page';

describe('AngularPage', () => {
  let component: AngularPage;
  let fixture: ComponentFixture<AngularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
