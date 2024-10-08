import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  template: `
    <main>
      <header class="brand-name"></header>
      <section class="content">
        <app-home></app-home>
      </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}