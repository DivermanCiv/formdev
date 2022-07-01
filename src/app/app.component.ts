import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'formdev';
  onlineEvent: any;
  offlineEvent: any;
  isVisible = true;

  subscriptions: Subscription[] = [];

  connectionStatusMessage = '';
  connectionStatus = '';

  ngOnInit() {
    /**
     * Get the online/offline status from browser window
     */
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(() => {
      this.isVisible = true;
      this.connectionStatusMessage = 'Vous êtes à nouveau connecté';
      this.connectionStatus = 'online';
      setTimeout(() => this.isVisible = false, 3000);
      console.log('Online...');
    }));

    this.subscriptions.push(this.offlineEvent.subscribe(() => {
      this.isVisible = true;
      this.connectionStatusMessage = 'Connection perdue ! Vous n\'êtes plus connecté à internet';
      this.connectionStatus = 'offline';
      console.log('Offline...');
    }));
  }

  ngOnDestroy(): void {
    /**
     * Unsubscribe all subscriptions to avoid memory leak
     */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
