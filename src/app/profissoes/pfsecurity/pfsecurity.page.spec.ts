import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfsecurityPage } from './pfsecurity.page';

describe('PfsecurityPage', () => {
  let component: PfsecurityPage;
  let fixture: ComponentFixture<PfsecurityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfsecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
