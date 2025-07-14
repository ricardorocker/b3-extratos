import { Component } from '@angular/core';
import { ExtratoComponent } from "./features/extrato/extrato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExtratoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
