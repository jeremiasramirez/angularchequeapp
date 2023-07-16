import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifiedtoken',
  templateUrl: './verifiedtoken.component.html',
  styleUrls: ['./verifiedtoken.component.css']
})
export class VerifiedtokenComponent {
  token:any = null
  constructor(public router_ :Router){
    setTimeout(()=>{
      
        this.token= localStorage.getItem("token");
      
    },2000)
  }
}
