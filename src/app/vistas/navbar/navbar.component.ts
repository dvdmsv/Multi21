import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  login: any = localStorage.getItem("login");
  admin: any = localStorage.getItem("esAdmin");

  logoff(): void{
    localStorage.removeItem("login");
    localStorage.removeItem("username");
    localStorage.removeItem("esAdmin");
    window.location.reload();
  }


}
