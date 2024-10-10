// i-choose-you.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-i-choose-you',
  standalone: true,
  imports: [],
  templateUrl: './i-choose-you.component.html',
  styleUrl: './i-choose-you.component.css'
})
export class IChooseYouComponent {

  @Input()
  names: string[] = ['chick', 'hippo', 'monkey']

  @Output()
  choose = new EventEmitter<string>();

  selected = ''

  onSelect(name: string): void {
    this.selected = name;
    this.choose.emit(this.selected)
  }

}
