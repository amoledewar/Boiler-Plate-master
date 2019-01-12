import { Component, OnInit } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  box = {
    id: 1,
    name: 'box1',
    area: 150
  }

  date;

  constructor() {
    this.date = Date.now();
  }

  ngOnInit() {
  }
}
