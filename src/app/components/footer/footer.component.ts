import { Component } from '@angular/core';
import { ButtonContactComponent } from "../button-contact/button-contact.component";

@Component({
  selector: 'app-footer',
  imports: [ButtonContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
