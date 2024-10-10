import { Component, NgModule } from "@angular/core";

@Component({
  selector: `who-am-i`,
  template: `
    <p>Who Am I ?</p>
    <div class="partial">
      <img src="/packs/bear.png" alt="">
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

}


// @NgModule({
//   declarations: [WhoAmIComponent],
//   exports: [WhoAmIComponent]
// })
// export class AnimalPackModule {

// }
