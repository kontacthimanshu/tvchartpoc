import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chartpoc';
  burst:boolean = false;
  oi:number = 3209878;

  changeValue()
  {
    this.oi = this.oi + 10000;
    this.burst = true;
  }

}
