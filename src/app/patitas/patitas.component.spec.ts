import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatitasComponent } from './patitas.component';

describe('PatitasComponent', () => {
  let component: PatitasComponent;
  let fixture: ComponentFixture<PatitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
