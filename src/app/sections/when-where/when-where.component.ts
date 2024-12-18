import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VenueDetails {
  title: string;
  time: string;
  location: string;
  address: string;
  icon: string;
}

@Component({
  selector: 'app-when-where',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './when-where.component.html',
  styleUrl: './when-where.component.scss'
})
export class WhenWhereComponent {
  date: string = 'December 19, 2024';
  
  venues: VenueDetails[] = [
    {
      title: 'Wedding Ceremony',
      time: '10:00 AM',
      location: 'St. Anthony\'s Church',
      address: 'Brookfields, Freetown',
      icon: 'fa-church'
    },
    {
      title: 'Wedding Reception',
      time: '2:00 PM',
      location: 'Radisson Blu Mammy Yoko Hotel',
      address: 'Aberdeen, Freetown',
      icon: 'fa-glass-cheers'
    }
  ];
}
