import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EntourageMember {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-entourage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entourage.component.html',
  styleUrl: './entourage.component.scss'
})
export class EntourageComponent {
  activeTab: 'bridesmaids' | 'groomsmen' = 'bridesmaids';

  bridesmaids: EntourageMember[] = [
    {
      name: 'Michaela Sesay',
      role: 'Maid of Honor',
      image: 'assets/images/entourage/bridesmaid-1.png'
    },
    {
      name: 'Antoinette Sampson',
      role: 'Bridesmaid',
      image: 'assets/images/entourage/bridesmaid-2.png'
    },
    {
      name: 'Bernadette Jarret',
      role: 'Bridesmaid',
      image: 'assets/images/entourage/bridesmaid-3.png'
    },
    {
      name: 'Janet Yomba',
      role: 'Bridesmaid',
      image: 'assets/images/entourage/bridesmaid-4.png'
    },
    {
      name: 'Mariama Bangura',
      role: 'Bridesmaid',
      image: 'assets/images/entourage/bridesmaid-5.png'
    },
    {
      name: 'Samira Wurie',
      role: 'Bridesmaid',
      image: 'assets/images/entourage/bridesmaid-6.png'
    },
    {
      name: 'Sia Lucy Gandi-Gborie',
      role: 'Bridesmaid',
      image: 'assets/images/entourage/bridesmaid-7.png'
    },
    {
      name: 'Tracy Godwin-Cole',
      role: 'Bridesmaid',
      image: 'assets/images/entourage/bridesmaid-8.png'
    }
  ];

  groomsmen: EntourageMember[] = [
    {
      name: 'Lucius Kargbo',
      role: 'Best Man',
      image: 'assets/images/entourage/groomsman-1.jpg'
    },
    {
      name: 'Sheikh Kabiru Mansaray',
      role: 'Groomsman',
      image: 'assets/images/entourage/groomsman-2.jpg'
    },
    {
      name: 'Abdul Rahman Sesay',
      role: 'Groomsman',
      image: 'assets/images/entourage/groomsman-3.jpg'
    },
    {
      name: 'Ibrahim Elba',
      role: 'Groomsman',
      image: 'assets/images/entourage/groomsman-4.jpg'
    },
    {
      name: 'Jeremiah Sankoh',
      role: 'Groomsman',
      image: 'assets/images/entourage/groomsman-5.jpg'
    },
    {
      name: 'Nyakeh Jabati',
      role: 'Groomsman',
      image: 'assets/images/entourage/groomsman-6.jpg'
    },
    {
      name: 'Ashmed Barrie',
      role: 'Groomsman',
      image: 'assets/images/entourage/groomsman-7.jpg'
    },
    {
      name: 'Skinner Josephus Caulker',
      role: 'Groomsman',
      image: 'assets/images/entourage/groomsman-8.jpg'
    }
  ];
}
