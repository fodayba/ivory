import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsDayComponent } from './colors-day.component';

describe('ColorsDayComponent', () => {
  let component: ColorsDayComponent;
  let fixture: ComponentFixture<ColorsDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorsDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
