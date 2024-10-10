import { Component, Input } from "@angular/core";

@Component({
  selector: `who-am-i`,
  template: `
    <p>Who Am I ?</p>
    <div class="partial">
      <img src="/packs/{{name}}.png" alt="">
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

}
