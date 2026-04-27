import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-item',
  imports: [],
  standalone: true,
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  @Input() text: string = '';
  @Input() value: string = '';
}
