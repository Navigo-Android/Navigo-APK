import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfaiPage } from './pfai.page';

describe('PfaiPage', () => {
  let component: PfaiPage;
  let fixture: ComponentFixture<PfaiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
