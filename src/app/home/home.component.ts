import { Component } from '@angular/core';
import { HeroComponent } from '../sections/hero/hero.component';
import { BrideGroomComponent } from '../sections/bride-groom/bride-groom.component';
import { CountdownComponent } from '../sections/countdown/countdown.component';
import { EntourageComponent } from '../sections/entourage/entourage.component';
import { LoveStoryComponent } from '../sections/love-story/love-story.component';
import { MemoriesComponent } from '../sections/memories/memories.component';
import { WhenWhereComponent } from '../sections/when-where/when-where.component';
import { ColorsDayComponent } from '../sections/colors-day/colors-day.component';
import { GiftRegistryComponent } from '../sections/gift-registry/gift-registry.component';
import { RsvpComponent } from '../sections/rsvp/rsvp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    BrideGroomComponent,
    CountdownComponent,
    EntourageComponent,
    LoveStoryComponent,
    MemoriesComponent,
    WhenWhereComponent,
    ColorsDayComponent,
    GiftRegistryComponent,
    RsvpComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
