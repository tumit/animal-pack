import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalPackModule } from './who-am-i.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimalPackModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animal-pack';
}
