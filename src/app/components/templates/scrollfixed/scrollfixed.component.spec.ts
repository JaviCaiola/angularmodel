import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollfixedComponent } from './scrollfixed.component';

describe('ScrollfixedComponent', () => {
  let component: ScrollfixedComponent;
  let fixture: ComponentFixture<ScrollfixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollfixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollfixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
