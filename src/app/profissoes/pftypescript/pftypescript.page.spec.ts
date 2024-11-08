import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PftypescriptPage } from './pftypescript.page';

describe('PftypescriptPage', () => {
  let component: PftypescriptPage;
  let fixture: ComponentFixture<PftypescriptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PftypescriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
