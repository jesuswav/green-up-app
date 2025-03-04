import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule], // Importa CommonModule para usar directivas comunes
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;

  get buttonClasses(): string {
    return `btn ${this.size} ${this.disabled ? 'disabled' : ''}`;
  }
}