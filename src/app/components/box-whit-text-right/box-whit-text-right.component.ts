import { Component, input } from '@angular/core';

@Component({
  selector: 'app-box-whit-text-right',
  imports: [],
  templateUrl: './box-whit-text-right.component.html',
  styleUrl: './box-whit-text-right.component.scss'
})
export class BoxWhitTextRightComponent {

  public title = input<string>();
  public footerText = input<string>(); 

}
