import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Venue {
  title: string;
  time: string;
  location: string;
  address: string;
  mapUrl: string;
  image: string;
}

@Component({
  selector: 'app-when-where',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './when-where.component.html',
  styleUrl: './when-where.component.scss'
})
export class WhenWhereComponent {
  venues: Venue[] = [
    {
      title: 'Wedding Ceremony',
      time: '12:00 PM',
      location: 'Sacred Heart Cathedral',
      address: 'Siaka Stevens St, Freetown, Sierra Leone',
      mapUrl: 'https://maps.app.goo.gl/xRJSpGw13ZvKQg787',
      image: 'assets/images/venues/church.jpg'
    },
    {
      title: 'Wedding Reception',
      time: '6:00 PM',
      location: 'Bintumani International Conference Centre',
      address: 'Aberdeen, Freetown, Sierra Leone',
      mapUrl: 'https://maps.app.goo.gl/xg8ovQHGSQcgAbDF8',
      image: 'assets/images/venues/reception.jpg'
    }
  ];
}
