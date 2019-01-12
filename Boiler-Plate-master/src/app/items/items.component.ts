import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  listId:any[];

  constructor() {
   
    this.listId = [1,2,3,4,5];    
  }



  ngOnInit() {
    
  }

}
