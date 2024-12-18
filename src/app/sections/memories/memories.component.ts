import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Memory {
  image: string;
  caption: string;
  year: string;
}

@Component({
  selector: 'app-memories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.scss'
})
export class MemoriesComponent {
  hoveredIndex: number = -1;

  memories: Memory[] = [
    {
      image: 'assets/images/memories/memory-1.jpg',
      caption: 'First Christmas Together',
      year: '2014'
    },
    {
      image: 'assets/images/memories/memory-2.jpg',
      caption: 'Weekend in Leeds',
      year: '2022'
    },
    {
      image: 'assets/images/memories/memory-3.jpg',
      caption: 'Summer Adventures',
      year: '2023'
    },
    {
      image: 'assets/images/memories/memory-4.jpg',
      caption: 'Quiet Moments',
      year: '2023'
    },
    {
      image: 'assets/images/memories/memory-5.jpg',
      caption: 'Birthday Celebrations',
      year: '2023'
    },
    {
      image: 'assets/images/memories/memory-6.jpg',
      caption: 'City Explorations',
      year: '2023'
    },
    {
      image: 'assets/images/memories/memory-7.jpg',
      caption: 'Valentine\'s Day',
      year: '2024'
    },
    {
      image: 'assets/images/memories/memory-8.jpg',
      caption: 'The Proposal',
      year: '2024'
    }
  ];

  setHoveredIndex(index: number) {
    this.hoveredIndex = index;
  }
}
