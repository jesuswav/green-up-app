import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa FormsModule para usar ngModel
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: string = 'text'; // Tipo de input (text, number, email, etc.)
  @Input() placeholder: string = ''; // Placeholder del input
  @Input() disabled: boolean = false; // Estado deshabilitado
  @Input() value: string = ''; // Valor del input

  @Output() valueChange = new EventEmitter<string>(); // Emite cambios en el valor

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value); // Emite el nuevo valor
  }
}
