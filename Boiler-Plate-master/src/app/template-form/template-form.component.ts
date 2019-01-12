import { ChildComponent } from './../child/child.component';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  userName: string;
  password: string;
  param: string;

  constructor() {
    this.param = 'initial param';
  }

  someChange(event) {
    this.param = event;
  }

  ngOnInit() {
  }

}
