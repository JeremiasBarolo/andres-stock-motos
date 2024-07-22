import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showSidebar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (this.router.url.includes('/login')) {
        this.showSidebar = false;
      } else {
        this.showSidebar = true;
      }
    });
  }
}
