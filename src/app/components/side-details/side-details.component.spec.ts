import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDetailsComponent } from './side-details.component';

describe('SideDetailsComponent', () => {
  let component: SideDetailsComponent;
  let fixture: ComponentFixture<SideDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideDetailsComponent]
    });
    fixture = TestBed.createComponent(SideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
