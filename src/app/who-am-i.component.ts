import { Component, Input } from "@angular/core";
import { AnimalPackService } from "./animal-pack.service";

@Component({
  selector: `who-am-i`,
  template: `
    <p>Who Am I ?</p>
    <div class="partial">
      <img src="{{animalPackService.getPath(name)}}" alt="">
    </div>
  `,
  styles: `
    .partial {
      height: 50px;
      overflow: hidden;
    }
  `,
  standalone: true
})
export class WhoAmIComponent {

  @Input()
  name = 'cow'

  constructor(public animalPackService: AnimalPackService) {}

}
