import { Component } from '@angular/core'
import { firebaseConfig } from './firebase.config'
import { initializeApp } from 'firebase/app'
import { AuthService } from './auth/auth.service'

interface onInit {}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements onInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    initializeApp(firebaseConfig)
  }

  isAuthenticated() {
    return this.authService.isAuthenticated
  }

  logout() {
    this.authService.logout()
  }
}
