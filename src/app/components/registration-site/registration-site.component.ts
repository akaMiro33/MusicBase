import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../models/UserRegistration';

@Component({
  selector: 'app-registration-site',
  templateUrl: './registration-site.component.html',
  styleUrls: ['./registration-site.component.css']
})
export class RegistrationSiteComponent implements OnInit {

  user = new UserRegistration('', 'brno12', 'akaMiro33@gmail.com');
  // isNotUpperCase: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
  }


  passwordHasUpperLetter(): boolean {
    for (let index = 0; index < this.user.password.length; index++) {
      const element = this.user.password.length[index];
      if ((element >= 'A') && (element <= 'Z')) {
        return false;
      }
    }
    return true;
  }
}
