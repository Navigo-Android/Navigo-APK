import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypescriptPage } from './typescript.page';

describe('TypescriptPage', () => {
  let component: TypescriptPage;
  let fixture: ComponentFixture<TypescriptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
