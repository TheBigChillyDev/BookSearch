import { Component, Input } from '@angular/core';
import { BookResults } from '../bookResults';


@Component({
  selector: 'app-book-results',
  standalone: true,
  imports: [],
  template: `
    <section class="books">
      <h2 class="book-title">{{bookResults.title}}</h2>
      <p class="book-authors">{{bookResults.authors}}</p>
      <p class="link">{{bookResults.link}}</p>
    </section>
  `,
  styleUrl: './book-results.component.css'
})
export class BookResultsComponent {
  @Input() bookResults!:BookResults;
}
