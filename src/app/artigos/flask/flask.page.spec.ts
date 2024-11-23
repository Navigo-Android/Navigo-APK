import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlaskPage } from './flask.page';

describe('FlaskPage', () => {
  let component: FlaskPage;
  let fixture: ComponentFixture<FlaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
