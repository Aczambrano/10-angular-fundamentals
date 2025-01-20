import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithTextComponent } from './box-with-text.component';

describe('BoxWithTextComponent', () => {
  let component: BoxWithTextComponent;
  let fixture: ComponentFixture<BoxWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxWithTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
