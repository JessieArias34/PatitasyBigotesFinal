import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulopagComponent } from './titulopag.component';

describe('TitulopagComponent', () => {
  let component: TitulopagComponent;
  let fixture: ComponentFixture<TitulopagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulopagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulopagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
