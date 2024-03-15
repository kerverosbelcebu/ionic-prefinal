import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data=[
    {
      name:'primary',
      select:false
    },
    {
      name:'secondary',
      select:true
    },
    {
      name:'tertiary',
      select:false
    },
    {
      name:'success',
      select:true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }

}
