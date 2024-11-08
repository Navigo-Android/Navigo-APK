import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapDjangoPage } from './map-django.page';

describe('MapDjangoPage', () => {
  let component: MapDjangoPage;
  let fixture: ComponentFixture<MapDjangoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDjangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
