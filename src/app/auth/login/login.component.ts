import { Component, OnInit } from '@angular/core'
import { ILoginForm } from '../../models/form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

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
  isLoading = false

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.isLoading = true
    if (this.isLoading) return
    const auth = getAuth()
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then(userCredential => {
        alert('Yeahhh login success')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        alert('Credentials does not match out record')
      })
      .finally(() => (this.isLoading = false))
  }
}
