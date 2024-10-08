import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookResultsComponent } from './book-results.component';

describe('BookResultsComponent', () => {
  let component: BookResultsComponent;
  let fixture: ComponentFixture<BookResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
