import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PfflashPage } from './pfflash.page';

describe('PfflashPage', () => {
  let component: PfflashPage;
  let fixture: ComponentFixture<PfflashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PfflashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
