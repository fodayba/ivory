import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
    selector: 'app-rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class RsvpComponent implements OnInit {
    rsvpForm: FormGroup;
    isSubmitting = false;
    showSuccess = false;

    constructor(
        private fb: FormBuilder,
        private emailService: EmailService
    ) {
        this.rsvpForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            attendance: ['', Validators.required],
            plusOne: [false],
            message: ['']
        });
    }

    ngOnInit(): void {}

    async onSubmit(): Promise<void> {
        if (this.rsvpForm.valid && !this.isSubmitting) {
            this.isSubmitting = true;
            
            try {
                await this.emailService.sendRSVP(this.rsvpForm.value);
                this.showSuccess = true;
                this.rsvpForm.reset();
                setTimeout(() => {
                    this.showSuccess = false;
                }, 5000);
            } catch (error) {
                console.error('Error sending RSVP:', error);
            } finally {
                this.isSubmitting = false;
            }
        }
    }
}
