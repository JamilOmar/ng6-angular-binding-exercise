import { Component, OnInit , Input } from '@angular/core';
import { GameValue } from '../game-value';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() gameValue:GameValue;
  constructor() { }

  ngOnInit() {
  }

}
