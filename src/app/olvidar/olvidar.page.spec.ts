import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidarPage } from './olvidar.page';

describe('OlvidarPage', () => {
  let component: OlvidarPage;
  let fixture: ComponentFixture<OlvidarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvidarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
