import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stage02Page } from './stage02.page';

describe('Stage02Page', () => {
  let component: Stage02Page;
  let fixture: ComponentFixture<Stage02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Stage02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
