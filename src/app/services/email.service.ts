import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private initialized = false;

  constructor() {
    this.initializeEmailJs();
  }

  private initializeEmailJs(): void {
    if (!environment.emailJs.publicKey) {
      console.warn('EmailJS public key is not set. RSVP functionality will not work.');
      return;
    }

    try {
      emailjs.init(environment.emailJs.publicKey);
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }

  async sendRSVP(formData: any): Promise<void> {
    if (!this.initialized) {
      throw new Error('EmailJS is not properly initialized. Please check your configuration.');
    }

    if (!environment.emailJs.serviceId || !environment.emailJs.templateId) {
      throw new Error('EmailJS service ID or template ID is not configured.');
    }

    const templateParams = {
      to_email: environment.emailJs.toEmail,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      attending: formData.attending ? 'Yes' : 'No',
      plus_one: formData.plusOne ? 'Yes' : 'No',
      message: formData.message || 'No message provided'
    };

    try {
      await emailjs.send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        templateParams
      );
    } catch (error) {
      console.error('Failed to send RSVP:', error);
      throw new Error('Failed to send RSVP. Please try again later or contact us directly.');
    }
  }
} 