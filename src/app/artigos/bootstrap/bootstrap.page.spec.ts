import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BootstrapPage } from './bootstrap.page';

describe('BootstrapPage', () => {
  let component: BootstrapPage;
  let fixture: ComponentFixture<BootstrapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
