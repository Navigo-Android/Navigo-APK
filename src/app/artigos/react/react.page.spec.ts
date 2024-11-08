import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactPage } from './react.page';

describe('ReactPage', () => {
  let component: ReactPage;
  let fixture: ComponentFixture<ReactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
