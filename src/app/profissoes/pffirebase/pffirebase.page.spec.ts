import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PffirebasePage } from './pffirebase.page';

describe('PffirebasePage', () => {
  let component: PffirebasePage;
  let fixture: ComponentFixture<PffirebasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PffirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
