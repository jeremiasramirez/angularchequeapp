import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appcheques';
  token:any = null
  constructor(){
    setTimeout(()=>{
      this.token= localStorage.getItem("token");
    },2000)
  }
}
