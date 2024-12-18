import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StoryMoment {
  title: string;
  content: string;
  image: string;
}

@Component({
  selector: 'app-love-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './love-story.component.html',
  styleUrl: './love-story.component.scss'
})
export class LoveStoryComponent {
  activeTab: 'met' | 'date' | 'proposal' = 'met';

  storyMoments: Record<'met' | 'date' | 'proposal', StoryMoment> = {
    met: {
      title: 'How We Met',
      content: 'Our paths crossed in the most unexpected way, leading to a connection that would change our lives forever. What started as a chance encounter blossomed into something truly special.',
      image: 'assets/images/love-story/how-we-met.jpg'
    },
    date: {
      title: 'Our First Date',
      content: 'That magical first evening together set the tone for our relationship. We talked for hours, laughed endlessly, and knew in our hearts that this was just the beginning of something beautiful.',
      image: 'assets/images/love-story/first-date.jpg'
    },
    proposal: {
      title: 'Marriage Proposal',
      content: 'In a moment filled with love and joy, surrounded by the beauty of our shared dreams, the question was asked and answered with an enthusiastic "Yes!" It was the perfect beginning to our forever.',
      image: 'assets/images/love-story/proposal.jpg'
    }
  };
}
