import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourOneComponent } from './colour-one.component';

describe('ColourOneComponent', () => {
  let component: ColourOneComponent;
  let fixture: ComponentFixture<ColourOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColourOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
