import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoosePage } from './choose.page';

describe('ChoosePage', () => {
  let component: ChoosePage;
  let fixture: ComponentFixture<ChoosePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
