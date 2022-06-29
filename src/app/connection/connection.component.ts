import {Component, OnInit} from '@angular/core'
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'connection',
  templateUrl: 'connection.component.html',
  styleUrls: ['connection.component.scss']
})

export class ConnectionComponent implements OnInit {
  Users = [
    {id: 'admin', password: 'admin'},
    {id: 'root', password: 'root'}
  ]

  isShown: boolean = false

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('user') !== undefined) {
      this.router.navigate([''])
    }
  }

  toggleShow() {
    this.isShown = true
  }

  onSubmit(form: NgForm) {
    let loggedIn = false
    this.Users.map(user => {
      if (user.id === form.value.identifier && user.password === form.value.password) {
        localStorage.setItem('user', form.value.identifier)
        this.router.navigate([''])
        loggedIn = true
      }
    })
    if (!loggedIn) {
      this.toggleShow()
    }
  }
}
