import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStopsFormComponent } from './select-stops-form.component';

describe('SelectStopsFormComponent', () => {
  let component: SelectStopsFormComponent;
  let fixture: ComponentFixture<SelectStopsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectStopsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectStopsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
