import { Component, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-box-profile',
  imports: [FormsModule, AvatarComponent], 
  templateUrl: './box-profile.component.html',
  styleUrl: './box-profile.component.scss'
})
export class BoxProfileComponent {

  name: string = '';  

  public nameChanged  = output<string>();

  onChangeName() {
    console.log(this.name)
    this.nameChanged.emit(this.name)
  }
}
