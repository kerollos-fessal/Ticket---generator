import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDetailsComponent } from './top-details.component';

describe('TopDetailsComponent', () => {
  let component: TopDetailsComponent;
  let fixture: ComponentFixture<TopDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDetailsComponent]
    });
    fixture = TestBed.createComponent(TopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
