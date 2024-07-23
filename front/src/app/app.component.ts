import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidebar = true;
  showHeader = true;

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        
        const isLoginPage = event.url.includes('login');
        this.showSidebar = !isLoginPage;
        this.showHeader = !isLoginPage;
      }
    });
  }
}