import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { WhoAmIComponent } from './who-am-i.component';
import { IChooseYouComponent } from './i-choose-you/i-choose-you.component';
import { AnimalPackService } from './animal-pack.service';

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

  animalPackService = inject(AnimalPackService)
  router = inject(Router)
  
  chooseAnimal = ''

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
    this.router.navigate(['/directed-by'])
  }

}
