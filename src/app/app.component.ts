import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Multi21';

  login: string = "";

  constructor(private router: Router){}

  ngOnInit(){
    if(localStorage.getItem("login") == null){
      this.login = "false";
      this.router.navigate(['/registro']);
    }
  }
}
