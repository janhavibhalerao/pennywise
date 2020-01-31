import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
