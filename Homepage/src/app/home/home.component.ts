import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInStatus :boolean;
  creds = JSON.parse(localStorage.getItem('user'));

  constructor() {
    if(this.creds){
      this.loggedInStatus = true;
    }
   }

  ngOnInit() {
  }

}
