import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BackgroundVideoComponent } from "./components/background-video/background-video.component";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BoxProfileComponent } from './components/box-profile/box-profile.component';
import { BoxSmallLeftComponent } from './components/box-small-left/box-small-left.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, 
    FooterComponent, 
    MainComponent, 
    BackgroundVideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-school';
}
