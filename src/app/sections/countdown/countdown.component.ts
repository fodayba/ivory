import { Component, OnInit, OnDestroy, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private alive = true;
  private isBrowser: boolean;
  
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  // Wedding date: December 19, 2024 at 12:00 PM
  private weddingDate: Date = new Date('2024-12-19T12:00:00');

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.calculateTimeRemaining();
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startCountdown();
    }
  }

  ngOnDestroy() {
    this.alive = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private startCountdown() {
    // Calculate immediately and then start interval
    this.calculateTimeRemaining();
    this.subscription = interval(1000)
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe(() => {
        this.calculateTimeRemaining();
        if (this.isBrowser) {
          this.cdr.detectChanges();
        }
      });
  }

  private calculateTimeRemaining() {
    try {
      const now = new Date().getTime();
      const weddingTime = this.weddingDate.getTime();
      const timeRemaining = weddingTime - now;

      if (timeRemaining > 0) {
        this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      } else {
        this.resetCountdown();
      }
    } catch (error) {
      console.error('Error calculating time remaining:', error);
      this.resetCountdown();
    }
  }

  private resetCountdown() {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  // Helper method to pad numbers with leading zero
  padNumber(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}
