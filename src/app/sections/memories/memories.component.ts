import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Memory {
  image: string;
  caption: string;
}

@Component({
  selector: 'app-memories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.scss'
})
export class MemoriesComponent {
  memories: Memory[] = [
    {
      image: 'assets/images/memories/memory-1.jpg',
      caption: 'Our First Selfie'
    },
    {
      image: 'assets/images/memories/memory-2.jpg',
      caption: 'Beach Day'
    },
    {
      image: 'assets/images/memories/memory-3.jpg',
      caption: 'Holiday Together'
    },
    {
      image: 'assets/images/memories/memory-4.jpg',
      caption: 'Family Dinner'
    },
    {
      image: 'assets/images/memories/memory-5.jpg',
      caption: 'Weekend Getaway'
    },
    {
      image: 'assets/images/memories/memory-6.jpg',
      caption: 'Birthday Celebration'
    },
    {
      image: 'assets/images/memories/memory-7.jpg',
      caption: 'Adventure Time'
    },
    {
      image: 'assets/images/memories/memory-8.jpg',
      caption: 'Special Moments'
    }
  ];
}
