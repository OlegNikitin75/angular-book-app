import { Component, OnInit } from '@angular/core'
import { IRegisterForm } from '../../models/form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

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
  passwordMatched = true
  isLoading = false

  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.isLoading) return
    this.isLoading = true

    if (this.form.password !== this.form.confirmPassword) {
      this.passwordMatched = false
      return
    }
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then(userCredential => {
        const user = userCredential.user
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
      })
      .finally(() => (this.isLoading = false))
  }
}
