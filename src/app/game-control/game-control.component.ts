import { Component,EventEmitter, OnInit , Output } from '@angular/core';
import {GameInterval} from '../game-interval';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() secondChanged = new EventEmitter<GameInterval>();
  seconds:number;
  stop:boolean = false
  constructor() { 
    this.seconds = 0;
  }

  ngOnInit() {
  
  }



  


  public onGameStart()
  {
    console.log('started');
    const interval = setInterval(()=>{ 
      if(this.stop===true)
      {
        clearInterval(interval);
        this.stop = !this.stop;
      }
      const gameInterval = new GameInterval();
      gameInterval.second = this.seconds ++;
      this.secondChanged.emit(gameInterval) }, 
      1000);
  }
  public onGameStop()
  {
    console.log('stopped');
    this.stop = true;
   
  }


}
