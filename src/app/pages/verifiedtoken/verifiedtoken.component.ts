import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifiedtoken',
  templateUrl: './verifiedtoken.component.html',
  styleUrls: ['./verifiedtoken.component.css']
})
export class VerifiedtokenComponent {

  constructor(public router_ :Router){
    setTimeout(()=>{
      this.router_.navigate(['/home'])
    },2000)
  }
}
