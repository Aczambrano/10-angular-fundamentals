import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BackgroundVideoComponent } from "./components/background-video/background-video.component";

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
