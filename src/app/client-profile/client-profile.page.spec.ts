import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientProfilePage } from './client-profile.page';

describe('ClientProfilePage', () => {
  let component: ClientProfilePage;
  let fixture: ComponentFixture<ClientProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
