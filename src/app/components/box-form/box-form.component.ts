import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-form',
  imports: [FormsModule, CommonModule], 
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss']
})
export class BoxFormComponent {
  selectedOption: string | null = null;
  
  formSubmitted: boolean = false;

  options = [
    { value: 'um', label: 'Um.....', percentage: '16%' },
    { value: 'warming', label: 'Warming up to this vibe.', percentage: '29%' },
    { value: 'definitely', label: 'Definitely vibin!', percentage: '36%' },
    { value: 'aboard', label: 'Been aboard the vibe train for a minute! Choo choo!!', percentage: '19%' }
  ];

  onSubmit(): void {
    this.formSubmitted = true;
  }
}
