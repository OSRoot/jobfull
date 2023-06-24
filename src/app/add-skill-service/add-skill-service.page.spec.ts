import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSkillServicePage } from './add-skill-service.page';

describe('AddSkillServicePage', () => {
  let component: AddSkillServicePage;
  let fixture: ComponentFixture<AddSkillServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSkillServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
