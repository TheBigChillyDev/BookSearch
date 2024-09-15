import { Component } from '@angular/core';
import { BookResultsComponent } from '../book-results/book-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookResultsComponent],
  template: `
    <section>
        <form>
          <input type="text" placeholder="Enter a book title">
          <button class="primary" type="button">Search</button>
        </form>
    </section>
    <section class="results">
      <app-book-results></app-book-results>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
