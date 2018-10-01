import { Component } from '@angular/core';
import {GameInterval} from './game-interval';
import {GameValue} from './game-value';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddGameValue: GameValue;
  evenGameValue: GameValue;
  
  constructor()
  {
    this.oddGameValue = new GameValue();
    this.evenGameValue = new GameValue();

  }

  onSecondChanged(gi: GameInterval)
  {
    if(gi.second % 2)
    {

      this.evenGameValue.add();
      

    }else{

      this.oddGameValue.add();
    }


  }
}
