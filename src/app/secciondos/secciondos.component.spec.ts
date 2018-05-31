import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecciondosComponent } from './secciondos.component';

describe('SecciondosComponent', () => {
  let component: SecciondosComponent;
  let fixture: ComponentFixture<SecciondosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecciondosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecciondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
