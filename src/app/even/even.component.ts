import { Component, OnInit , Input} from '@angular/core';
import { GameValue } from '../game-value';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() gameValue:GameValue;

  constructor() { }

  ngOnInit() {
  }

}
