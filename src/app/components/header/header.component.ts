import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-header',
  imports: [AvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
