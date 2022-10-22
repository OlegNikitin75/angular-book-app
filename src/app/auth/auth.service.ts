import { Injectable } from '@angular/core'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { ILoginForm, IRegisterForm } from '../models/form'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false
  isLoading = false
  passwordMatched = true

  constructor(private router: Router) {}

  login(form: ILoginForm) {
    if (this.isLoading) return
    this.isLoading = true
    const auth = getAuth()
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        this.isAuthenticated = true
        this.router.navigate([''])
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        this.isAuthenticated = false
      })
      .finally(() => (this.isLoading = false))
  }

  register(form: IRegisterForm) {
    if (this.isLoading) return
    this.isLoading = true

    if (form.password !== form.confirmPassword) {
      this.passwordMatched = false
      return
    }
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        this.isAuthenticated = true
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        this.isAuthenticated = false
      })
      .finally(() => (this.isLoading = false))
  }

  logout() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        this.router.navigate(['login'])
        this.isAuthenticated = false
      })
      .catch(error => {})
  }
}
