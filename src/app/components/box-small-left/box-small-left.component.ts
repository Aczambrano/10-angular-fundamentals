import { Component,input } from '@angular/core';
import { ButtonContactComponent } from "../button-contact/button-contact.component";
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-box-small-left',
  imports: [ButtonContactComponent, AvatarComponent],
  templateUrl: './box-small-left.component.html',
  styleUrl: './box-small-left.component.scss'
})
export class BoxSmallLeftComponent {
  public dynamicName = input<string>();
}
