import { Component, input } from '@angular/core';

@Component({
  selector: 'app-box-image',
  imports: [],
  templateUrl: './box-image.component.html',
  styleUrl: './box-image.component.scss'
})
export class BoxImageComponent {
  public imageSrc = input<string>();
}
