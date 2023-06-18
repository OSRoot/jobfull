import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEduPage } from './add-edu.page';

describe('AddEduPage', () => {
  let component: AddEduPage;
  let fixture: ComponentFixture<AddEduPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
