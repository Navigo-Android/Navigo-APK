import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfionicPage } from './pfionic.page';

describe('PfionicPage', () => {
  let component: PfionicPage;
  let fixture: ComponentFixture<PfionicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
