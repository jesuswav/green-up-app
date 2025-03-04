import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    ButtonComponent,
    InputComponent,
  ],
  template: `
    <h1>Bienvenido a la página de inicio</h1>
    <app-button size="small">Botón Pequeño</app-button>
    <app-button size="medium">Botón Mediano</app-button>
    <app-button size="large">Botón Grande</app-button>
    <app-button [disabled]="true">Botón Deshabilitado</app-button>
    <app-button>Botón por Defecto</app-button>
  `,
})
export class Tab1Page {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor() {}
}
