import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor.component'; // Adjust the path as needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, ProfileEditorComponent],
  template: `
    <h1>Welcome to My App</h1>
    <app-reactive-form></app-reactive-form>
  `,
})
export class booksearch {
  title = 'Book Search';
}

// Bootstrap the application with the AppComponent
import { bootstrapApplication } from '@angular/platform-browser';
bootstrapApplication(booksearch, {
  providers: [],
});