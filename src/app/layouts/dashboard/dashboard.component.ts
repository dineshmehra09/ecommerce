import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgStorage } from 'ng-storage-local';
import { AuthService } from 'src/app/shared/services/auth.service';

const helper = new JwtHelperService();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private storage: NgStorage, private router: Router) { }

  ngOnInit() {
    // Auto logout when token is expired
    const token = this.authService.getToken();
    if(token) {
      const expirationDate: any = helper.getTokenExpirationDate(token), currentDate = new Date();
      const expirationTime = expirationDate.getTime() - currentDate.getTime();
      this.autoLogout(expirationTime);
    }
  }

  // Auto logout timer function
  autoLogout(_expirationTime: any) {
    setTimeout(() => {
      this.logout();
    }, _expirationTime);
  }

  // Logging Out
  logout() {
    this.storage.clearAllLocalStorage().then(res => {
      this.router.navigate(['/login']);
    })
  }

}
