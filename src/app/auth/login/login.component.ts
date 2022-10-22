import { Component, OnInit } from '@angular/core'
import { ILoginForm } from '../../models/form'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: ILoginForm = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    this.authService.login(this.form)
  }

  isLoading() {
    return this.authService.isLoading
  }
}
