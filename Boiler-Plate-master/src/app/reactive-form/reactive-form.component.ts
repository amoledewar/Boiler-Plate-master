import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  nameForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.nameForm = new FormGroup({
      userName: new FormControl('',{
        validators: [Validators.minLength(3),Validators.required],
        updateOn: 'blur'
      }),
      password: new FormControl('',{
        validators: Validators.required,
        updateOn: 'change'
      })
    });
  }
}
