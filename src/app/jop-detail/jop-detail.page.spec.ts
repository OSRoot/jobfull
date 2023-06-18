import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JopDetailPage } from './jop-detail.page';

describe('JopDetailPage', () => {
  let component: JopDetailPage;
  let fixture: ComponentFixture<JopDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JopDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
