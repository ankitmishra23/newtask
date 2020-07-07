import { Component, OnInit ,Input} from '@angular/core';
import {FormsModule,ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup;
submitform=false;

@Input() key:string;
  constructor(private log:FormBuilder) {
    this.ngOnInit();
   }

  ngOnInit(): void {
    this.login=this.log.group(
      {
        email:this.log.control("",[Validators.required,Validators.email]),
        password:this.log.control("",[Validators.required,Validators.minLength(8)])
      }
    )
  }
  onSubmit()
  {
    
  
    this.submitform=true;
    if(this.login.invalid)
    {
      alert("Something is wrong");
      return;
    }
    else{
      if((JSON.parse(window.localStorage.getItem(this.login.controls['email'].value+""+String(this.login.controls['password'].value)))))
      {
        this.key=JSON.parse(window.localStorage.getItem(this.login.controls['email'].value+""+String(this.login.controls['password'].value)));
        alert("Loged In");
      }
      else
      {
        alert("register first.");
      }
    }
  }
  

}
export interface loggedinuser{
  user:string;
}