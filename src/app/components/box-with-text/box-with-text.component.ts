import { Component, input } from '@angular/core';

@Component({
  selector: 'app-box-with-text',
  imports: [],
  templateUrl: './box-with-text.component.html',
  styleUrl: './box-with-text.component.scss'
})
export class BoxWithTextComponent {
  public imageSrc = input<string>();
  public avatarSrc = input<string>();
  public mainText = input<string>();
  public footerName = input<string>();
  public showFooterImage = input<boolean>(true);


  formatFooterText(text: string): string {
    return text.replace(/ - /g, '<br />');
  }

}
