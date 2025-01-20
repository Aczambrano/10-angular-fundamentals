import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxVideoComponent } from './box-video.component';

describe('BoxVideoComponent', () => {
  let component: BoxVideoComponent;
  let fixture: ComponentFixture<BoxVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
