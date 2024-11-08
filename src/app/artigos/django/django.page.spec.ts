import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DjangoPage } from './django.page';

describe('DjangoPage', () => {
  let component: DjangoPage;
  let fixture: ComponentFixture<DjangoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DjangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
