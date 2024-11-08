import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfpythonPage } from './pfpython.page';

describe('PfpythonPage', () => {
  let component: PfpythonPage;
  let fixture: ComponentFixture<PfpythonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfpythonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
