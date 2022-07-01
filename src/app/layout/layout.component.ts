import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})

export class LayoutComponent {

  history: string[] = []

  canGoBack = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private location: Location
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        this.canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation);

        if (event.urlAfterRedirects === '/modules') {
          this.canGoBack = false;
        }
      });

  }

  back(): void {
    if (this.canGoBack) {
      this.location.back();
    } else {
      this.router.navigate(['modules'], {relativeTo: this.route});
    }
  }
}
