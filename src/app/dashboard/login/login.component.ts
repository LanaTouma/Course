import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  isHovered:        boolean = false;

  loader:        boolean = false;          

  constructor() {}

  ngOnInit() {
    this.loader = false;
  }

  applyHoverEffect() {
    this.isHovered = true;
  }

  removeHoverEffect() {
    this.isHovered = false;
  }

  onlick(){
    this.loader = true;
  }
}
