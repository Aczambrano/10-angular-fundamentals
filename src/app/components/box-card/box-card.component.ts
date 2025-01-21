import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type MediaType = 'image' | 'video';

@Component({
  selector: 'app-box-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.scss']
})
export class BoxCardComponent {
  @Input() mediaType: MediaType = 'image';
  @Input() imageSrc?: string;
  @Input() imageAlt: string = 'Image';
  @Input() mainText?: string;
  @Input() avatarSrc?: string;
  @Input() footerName?: string;
  @Input() showFooterImage: boolean = false;
  @Input() hasContent: boolean = false;
  
  // Video specific inputs
  private _videoUrl?: string;
  safeVideoUrl: SafeResourceUrl | null = null;

  @Input()
  set videoUrl(url: string | undefined) {
    this._videoUrl = url;
    if (url) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      this.safeVideoUrl = null;
    }
  }
  get videoUrl(): string | undefined {
    return this._videoUrl;
  }

  @Input() videoLabel?: string;
  @Input() startText?: string;
  @Input() endText?: string;

  constructor(private sanitizer: DomSanitizer) {}

  showFooter(): boolean {
    return this.shouldShowAvatar() || !!this.footerName;
  }

  shouldShowAvatar(): boolean {
    return this.showFooterImage && !!this.avatarSrc && this.avatarSrc.trim() !== '';
  }

  formatFooterText(text: string): string {
    return text.replace(/ - /g, '<br />');
  }
}