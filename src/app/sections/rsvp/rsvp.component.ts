import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

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

  constructor(private fb: FormBuilder) {
    this.rsvpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+\\-\\s]*$')]],
      attending: [null, Validators.required],
      plusOne: [false],
      message: ['']
    });

    // Initialize EmailJS
    emailjs.init(environment.emailJs.publicKey);
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
        const formData = this.rsvpForm.value;
        const templateParams = {
          to_email: environment.emailJs.toEmail,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          attending: formData.attending ? 'Yes' : 'No',
          plus_one: formData.plusOne ? 'Yes' : 'No',
          message: formData.message || 'No message provided'
        };

        await emailjs.send(
          environment.emailJs.serviceId,
          environment.emailJs.templateId,
          templateParams
        );

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
