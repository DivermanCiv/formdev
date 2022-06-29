import { Component } from '@angular/core';
import { AuthGuard } from './helpers/authGuard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'formdev';

  ngOnInit() {
  }
}
