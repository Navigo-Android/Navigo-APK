import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfdjangoPage } from './pfdjango.page';

describe('PfdjangoPage', () => {
  let component: PfdjangoPage;
  let fixture: ComponentFixture<PfdjangoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfdjangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
