import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProposalPage } from './edit-proposal.page';

describe('EditProposalPage', () => {
  let component: EditProposalPage;
  let fixture: ComponentFixture<EditProposalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditProposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
