import { Component, OnInit } from '@angular/core';
import { AuthService} from '../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  creds:string = JSON.parse(localStorage.getItem('user'));
  loggedInStatus :boolean = false;

  constructor(private authservice: AuthService, private router: Router) {
    if(this.creds){
      this.loggedInStatus = true;
    }
   }

  ngOnInit() {
  }

  onLogoutClick(){

    this.authservice.logout();
    console.log('You are logged out!');
    //location.reload();
    this.router.navigate(['/login']);
    
    return false;
 
  }

}
