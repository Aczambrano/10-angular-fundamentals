import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-contact',
  imports: [],
  templateUrl: './button-contact.component.html',
  styleUrl: './button-contact.component.scss'
})
export class ButtonContactComponent {

  public text = input<string>();
  public arialabel = input<string>();
  
}
