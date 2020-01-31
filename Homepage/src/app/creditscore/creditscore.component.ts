import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creditscore',
  templateUrl: './creditscore.component.html',
  styleUrls: ['./creditscore.component.css']
})
export class CreditscoreComponent implements OnInit {
	creds: string = JSON.parse(localStorage.getItem('user'));
	loggedInStatus: boolean = false;
  constructor(private userService: UserService, private router: Router) { 
    if (this.creds) {
			this.loggedInStatus = true;
		}
  }

  ngOnInit() {
  }
   
}
