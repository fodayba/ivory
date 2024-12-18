import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent implements OnInit {
  rsvpForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.rsvpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+\\-\\s]*$')]],
      attending: [null, Validators.required],
      plusOne: [false],
      message: ['']
    });
  }

  ngOnInit(): void {
    // Watch for attending value changes to reset plusOne when not attending
    this.rsvpForm.get('attending')?.valueChanges.subscribe(attending => {
      if (!attending) {
        this.rsvpForm.patchValue({ plusOne: false });
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.rsvpForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        await this.emailService.sendRSVP(this.rsvpForm.value);
        this.submitSuccess = true;
        this.rsvpForm.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);

      } catch (error) {
        console.error('RSVP submission failed:', error);
        this.submitError = true;
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          this.submitError = false;
        }, 5000);

      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
