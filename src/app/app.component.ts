import { Component } from '@angular/core'
import { firebaseConfig } from './firebase.config'
import { initializeApp } from 'firebase/app'

interface onInit {}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements onInit {
  ngOnInit() {
    initializeApp(firebaseConfig)
  }
}
