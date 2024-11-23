import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfflaskPage } from './pfflask.page';

describe('PfflaskPage', () => {
  let component: PfflaskPage;
  let fixture: ComponentFixture<PfflaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfflaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
