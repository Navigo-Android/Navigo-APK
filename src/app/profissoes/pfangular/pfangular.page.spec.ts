import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfangularPage } from './pfangular.page';

describe('PfangularPage', () => {
  let component: PfangularPage;
  let fixture: ComponentFixture<PfangularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfangularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
