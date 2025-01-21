import { Component, input } from '@angular/core';

@Component({
  selector: 'app-box-with-text',
  imports: [],
  templateUrl: './box-with-text.component.html',
  styleUrl: './box-with-text.component.scss'
})
export class BoxWithTextComponent {
  public imageSrc = input.required<string>();
  public imageAlt = input<string>('Image');
  public avatarSrc = input<string>();
  public footerName = input<string>();
  public mainText = input<string>();
  public showFooterImage = input<boolean>(false);
  public hasContent = input<boolean>(false);

  // Video specific inputs
  public videoUrl = input<string>();
  public videoLabel = input<string>();
  public startText = input<string>();
  public endText = input<string>();
  

  public showFooter() {
    return this.shouldShowAvatar() || this.footerName();
  }

  public shouldShowAvatar() {
    return this.showFooterImage() && this.avatarSrc() && this.avatarSrc()?.trim() !== '';
  }

  formatFooterText(text: string): string {
    return text.replace(/ - /g, '<br />');
  }
}
