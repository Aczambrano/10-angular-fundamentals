import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSmallLeftComponent } from './box-small-left.component';

describe('BoxSmallLeftComponent', () => {
  let component: BoxSmallLeftComponent;
  let fixture: ComponentFixture<BoxSmallLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxSmallLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxSmallLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
