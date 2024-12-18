import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ColorSwatch {
  hex: string;
  name: string;
}

@Component({
  selector: 'app-colors-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colors-day.component.html',
  styleUrl: './colors-day.component.scss'
})
export class ColorsDayComponent {
  colors: ColorSwatch[] = [
    {
      hex: '#efbbff',
      name: 'Light Lavender'
    },
    {
      hex: '#d996fe',
      name: 'Bright Lilac'
    },
    {
      hex: '#be2aed',
      name: 'Vibrant Purple'
    },
    {
      hex: '#7f007f',
      name: 'Royal Purple'
    },
    {
      hex: '#670066',
      name: 'Deep Purple'
    }
  ];
}
