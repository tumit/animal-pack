import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhoAmIComponent } from './who-am-i.component';
import { IChooseYouComponent } from './i-choose-you/i-choose-you.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhoAmIComponent, IChooseYouComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
  whoAmI = 'bear'
  candidates = ['bear', 'frog', 'sloth']

  chooseAnimal = ''

  onChoose(name: string): void {
    this.chooseAnimal = name;
  }

}
