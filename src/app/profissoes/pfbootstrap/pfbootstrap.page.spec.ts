import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfbootstrapPage } from './pfbootstrap.page';

describe('PfbootstrapPage', () => {
  let component: PfbootstrapPage;
  let fixture: ComponentFixture<PfbootstrapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfbootstrapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
