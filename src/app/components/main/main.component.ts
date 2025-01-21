import { Component } from '@angular/core';
import { BoxSmallLeftComponent } from '../box-small-left/box-small-left.component';
import { BoxImageComponent } from "../box-image/box-image.component";
import { BoxColorComponent } from "../box-color/box-color.component";
import { BoxWithTextComponent } from "../box-with-text/box-with-text.component";
import { BoxProfileComponent } from "../box-profile/box-profile.component";
import { BoxDrawComponent } from "../box-draw/box-draw.component";
import { BoxFormComponent } from "../box-form/box-form.component";
import { BoxSmallRightComponent } from "../box-small-right/box-small-right.component";
import { BoxImageRightComponent } from "../box-image-right/box-image-right.component";
import { BoxVideoComponent } from "../box-video/box-video.component";
import { BoxCardComponent } from "../box-card/box-card.component";

@Component({
  selector: 'app-main',
  imports: [BoxSmallLeftComponent, BoxImageComponent, BoxColorComponent, BoxWithTextComponent, BoxProfileComponent, BoxDrawComponent, BoxFormComponent, BoxSmallRightComponent, BoxImageRightComponent, BoxVideoComponent, BoxCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  dynamicName: string = 'Newton'; 

}
