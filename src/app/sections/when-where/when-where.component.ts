import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Venue {
  title: string;
  time: string;
  location: string;
  address: string;
  image: string;
  mapUrl: string;
  description: string;
  date: string;
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
      image: 'assets/images/venues/church.jpg',
      mapUrl: 'https://maps.google.com',
      description: 'Join us for our beautiful wedding ceremony at this historic cathedral.',
      date: '19 DEC 2024'
    },
    {
      title: 'Reception & Party',
      time: '6:00 PM',
      location: 'Freetown International Conference Center',
      address: 'Bintumani Hotel, Freetown, Sierra Leone',
      image: 'assets/images/venues/reception.jpg',
      mapUrl: 'https://maps.google.com',
      description: 'Celebrate with us at this elegant venue as we begin our new journey together.',
      date: '19 DEC 2024'
    }
  ];
}
