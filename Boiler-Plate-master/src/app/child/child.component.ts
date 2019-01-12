import { ColorDirective } from './../color.directive';
import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  param:string;

  @Output()
  paramChanged:EventEmitter<string> = new EventEmitter<string>();

  changeParam(){
    this.param = "changed param";
    this.paramChanged.emit(this.param);
  }

  constructor() { }

  ngOnInit() {
  }

}
