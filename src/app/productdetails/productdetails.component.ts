import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {
  productdetail:any[];
  
  constructor() {}

  ngOnInit(): void {
  }

  search(){
    
    const doc=(document.getElementById("pid") as HTMLInputElement).value;
    this.productdetail=JSON.parse(window.localStorage.getItem(doc));
    console.log(this.productdetail);    
  }
  deleteproduct(index:number)
  {
this.productdetail.splice(index,1);
  }

}
