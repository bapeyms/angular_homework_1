import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Logo } from './logo/logo';
import { MainContent1 } from './main-content-1/main-content-1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Logo, MainContent1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homework_1');
}
