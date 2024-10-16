import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { WhoAmIComponent } from './who-am-i.component';
import { IChooseYouComponent } from './i-choose-you/i-choose-you.component';
import { AnimalPackService } from './animal-pack.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhoAmIComponent, IChooseYouComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
  whoAmI = 'bear'
  candidates = ['bear', 'frog', 'sloth']

  animalPackService = inject(AnimalPackService)
  router = inject(Router)
  
  chooseAnimal = ''

  director = 'Tumit O. Odds'

  constructor() {
    this.onReset();
  }

  onChoose(name: string): void {
    this.chooseAnimal = name;
  }

  onReset(): void {
    this.chooseAnimal = ''
    this.candidates = this.animalPackService.randomN(5)
    this.whoAmI = this.animalPackService.randomOne(this.candidates)
  }

  gotoCredit() {
    this.router.navigate(['/directed-by', this.director])
  }

}
