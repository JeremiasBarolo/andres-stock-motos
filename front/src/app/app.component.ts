import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  showSidebar = true;
  showHeader = true;
  isLoogedIn:boolean = false

  constructor(private router: Router, private authService: AuthService) {
    this.isLoogedIn = this.authService.isLoggedIn()
    if(!this.isLoogedIn){
      this.router.navigate(['/login']);
      
    }

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