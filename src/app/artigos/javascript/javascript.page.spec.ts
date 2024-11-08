import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JavaScriptPage } from './javascript.page';

describe('JavaScriptPage', () => {
  let component: JavaScriptPage;
  let fixture: ComponentFixture<JavaScriptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
