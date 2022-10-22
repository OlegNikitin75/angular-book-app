import { Component, OnInit } from '@angular/core'
import { IRegisterForm } from '../../models/form'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: IRegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    this.authService.register(this.form)
  }

  isLoading() {
    return this.authService.isLoading
  }
}
