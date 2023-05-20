import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticticsComponent } from './statictics.component';

describe('StaticticsComponent', () => {
  let component: StaticticsComponent;
  let fixture: ComponentFixture<StaticticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
