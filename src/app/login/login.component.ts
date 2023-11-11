import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username:           string = 'Angular@yahoo.com';
  password:           string = 'm123456E@2022';
  loginError:         boolean = false;
  loginSuccess:       boolean = false;
  isHovered:          boolean = false;
  isLoading:          boolean = false;


  constructor(private loginservice:LoginService, private router: Router) {}


  login() {
    this.isLoading = false;
    this.loginservice.login(this.username, this.password).subscribe(
      (loggedIn) => {
        if (loggedIn) {
          this.loginSuccess     = true;
          this.loginError       = false;
          this.isLoading        = false;

          this.router.navigate(['']); 

        } else {
          this.loginError       = true;
          this.loginSuccess     = false;
        }
      },
      (error) => {
        this.loginError         = true;
        this.loginSuccess       = false;
        this.isLoading          = false;
      }
    );
  }
  

  ngOnInit() {
  }

  applyHoverEffect() {
    this.isHovered = true;
  }

  removeHoverEffect() {
    this.isHovered = false;
  }

  onlick(){
  }


}
