import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopsInfoComponent } from './stops-info.component';

describe('StopsInfoComponent', () => {
  let component: StopsInfoComponent;
  let fixture: ComponentFixture<StopsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
