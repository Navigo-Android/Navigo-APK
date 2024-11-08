import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapAIPage } from './map-ai.page';

describe('MapAIPage', () => {
  let component: MapAIPage;
  let fixture: ComponentFixture<MapAIPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
