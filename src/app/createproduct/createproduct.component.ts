import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
createproduct:FormGroup;
submitform=false;
details:Array<any>;
  constructor(private pro:FormBuilder,private route:ActivatedRoute) {
    this.ngOnInit();
   }

  ngOnInit(): void {
    this.createproduct=this.pro.group(
      {
        productname:this.pro.control("",Validators.required),
        price:this.pro.control("",Validators.required),
        stock:this.pro.control("",Validators.required)
      }
    );
    
  
  }
  
  onSubmit()
  {
    this.submitform=true;
    if(this.createproduct.invalid)
    {
      alert("Try again");
      return;
    }
    else{
      /*const key="newlycreatedproduct"
      window.localStorage.setItem(key,JSON.stringify(this.createproduct.value))
      console.log(JSON.parse(window.localStorage.getItem(key)));
      alert("Product created!!");
      console.log(this.createproduct.controls['productname'].value)
      console.log(this.createproduct.controls['price'].value)
      console.log(this.createproduct.controls['stock'].value)*/
      
      this.details = JSON.parse(localStorage.getItem("items"));
    if(this.details)
    this.details.push({
      name : this.createproduct.controls['productname'].value,
      price : this.createproduct.controls['price'].value,
      stock : this.createproduct.controls['stock'].value
    });
    else
    {
      this.details = 
        [{
          name : this.createproduct.controls['productname'].value,
        price : this.createproduct.controls['price'].value,
        stock : this.createproduct.controls['stock'].value,
        }]
      
    } 
    localStorage.setItem(this.createproduct.controls['productname'].value,JSON.stringify(this.details));
    alert("Product created!!");
    }
  }

}
