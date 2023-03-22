import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logoff(){
    localStorage.removeItem("login");
    localStorage.removeItem("username");
    window.location.reload();
  }
}
