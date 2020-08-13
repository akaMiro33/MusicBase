import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/UserLogin';

@Component({
  selector: 'app-login-site',
  templateUrl: './login-site.component.html',
  styleUrls: ['./login-site.component.css']
})
export class LoginSiteComponent implements OnInit {

  user = new UserLogin('', 'brno12');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
  }

}
