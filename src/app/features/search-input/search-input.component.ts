import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  searchValue = '';
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value; // Acceder al valor del input
    this.inputValueChange.emit(value);
  }
}
