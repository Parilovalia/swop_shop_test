import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveComponent } from './adaptive.component';

describe('AdaptiveComponent', () => {
  let component: AdaptiveComponent;
  let fixture: ComponentFixture<AdaptiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
