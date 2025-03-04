import { Component } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    CommonModule,
    FormsModule,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,
    ExploreContainerComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = ''; // Almacena el valor del email
  password: string = ''; // Almacena el valor de la contraseña

  onSubmit(): void {
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      alert('Inicio de sesión exitoso');
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
