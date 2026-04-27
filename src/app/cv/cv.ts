import { Component } from '@angular/core';
import { CvItem } from '../cv-item/cv-item';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CvItem, CvItem],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {}
