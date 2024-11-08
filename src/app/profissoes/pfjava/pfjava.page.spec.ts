import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfjavaPage } from './pfjava.page';

describe('PfjavaPage', () => {
  let component: PfjavaPage;
  let fixture: ComponentFixture<PfjavaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfjavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
