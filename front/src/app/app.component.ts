import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  showSidebar = true;
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
    
        const isLoginPage = event.url.includes('login');
        const isRootPage = event.url === '' || event.url === '/';
    
        this.showSidebar = !(isLoginPage || isRootPage);
        this.showHeader = !(isLoginPage || isRootPage);
      }
    });
    
  }
  ngOnInit(): void {
    this.loginCheck();
  }

  

  ngOnChanges(changes: SimpleChanges): void {
    this.loginCheck();
  }


  loginCheck(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
    
        const isLoginPage = event.url.includes('login');
        const isRootPage = event.url === '' || event.url === '/';
    
        this.showSidebar = !(isLoginPage || isRootPage);
        this.showHeader = !(isLoginPage || isRootPage);
      }
    });
  }
}