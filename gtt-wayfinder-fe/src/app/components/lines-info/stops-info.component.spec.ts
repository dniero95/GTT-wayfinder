import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinesInfoComponent } from './lines-info.component';



describe('LinesInfoComponent', () => {
  let component: LinesInfoComponent;
  let fixture: ComponentFixture<LinesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
