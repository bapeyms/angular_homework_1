import { Component } from '@angular/core';
import { CvItem } from '../cv-item/cv-item';
import { CvLinks } from '../cv-links/cv-links';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CvItem, CvItem, CvLinks],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {}
