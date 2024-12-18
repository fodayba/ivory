import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StoryMoment {
  title: string;
  date: string;
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
      date: 'September 2012',
      content: 'Their story began in a way that\'s common in today\'s world -- they first connected on Facebook. A simple message turned into hours of chatting, and before long, they exchanged phone numbers and spoke daily. Despite the distance, they kept the conversation going, getting to know each other more with each passing day. Finally, in December 2014, they met in person for the first time when Ivory went to Freetown for the Christmas holiday, having always stayed in touch.',
      image: 'assets/images/love-story/met.jpg'
    },
    date: {
      title: 'Our First Date',
      date: 'May 7, 2020',
      content: 'Fast forward to 2022, when Ivory discovered that Josephine had moved to the UK. Excited by the news, he invited her to visit him in Leeds, where he was working at the time. That weekend marked the beginning of something special. On their first day together, they went out for dinner, savoring the good food and conversation. The evening didn\'t end there, they decided to take the fun up a notch and headed to a lively bar. The night was filled with laughter, music, and memories that would last a lifetime.',
      image: 'assets/images/love-story/first-date.jpg'
    },
    proposal: {
      title: 'The Proposal',
      date: 'February 18, 2024',
      content: 'With Valentine\'s Day falling on a busy weekday, Ivory suggested celebrating the weekend with a Sunday dinner, which Josephine thought would be a simple outing. After a lovely meal, as Josephine was about to leave, Ivory announced he\'d ordered one more thing. When the waiter brought out a tray, Josephine uncovered it to find "Will you marry me?" written beautifully. Before she could fully react, Ivory was down on one knee with a ring. Overwhelmed with joy, Josephine screamed "YES!" It was a stunning surprise and the perfect start to their forever.',
      image: 'assets/images/love-story/proposal.jpg'
    }
  };
}
