import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PythonPage } from './python.page';

describe('ArtigosPage', () => {
  let component: PythonPage;
  let fixture: ComponentFixture<PythonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
