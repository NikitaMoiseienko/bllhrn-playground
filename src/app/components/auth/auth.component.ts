import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  panelOpenState = true;

  users: any[] = []

  constructor(
    public authSevice: AuthService
  ) { }

  ngOnInit(): void {
    this.users = [
      { name: 'Amigo', age:23, id: 1},
      { name: 'Second', age:23, id: 12},
      { name: 'First', age:13, id: 12},
    ]
  }

  login(email: any, password: any) {
    console.log(email.value);
    console.log(password.value);
    
    this.authSevice.login(email.value, password.value).subscribe(res => {
      console.log(res)
    })
  }
}
