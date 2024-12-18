import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  rsvpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rsvpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,}$')]],
      attending: [true],
      plusOne: [false],
      message: ['']
    });
  }

  onSubmit() {
    if (this.rsvpForm.valid) {
      console.log(this.rsvpForm.value);
      // Here you would typically send the form data to your backend
      this.rsvpForm.reset({
        attending: true,
        plusOne: false
      });
    }
  }
}
