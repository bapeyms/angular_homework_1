import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  text1 = 'Full Name';
  value1 = 'Pusheen';

  text2 = 'Email';
  value2 = 'pusheen@gmail.com';

  text3 = 'Phone';
  value3 = '+123456789';

  text4 = 'City';
  value4 = 'Kyiv';

  text5 = 'Country';
  value5 = 'Ukraine';

  text6 = 'Position';
  value6 = 'Frontend Developer';

  text7 = 'Experience';
  value7 = '2 years';

  text8 = 'Skills';
  value8 = 'Angular, TS';
}