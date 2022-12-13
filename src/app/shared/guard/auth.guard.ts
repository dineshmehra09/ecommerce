import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataService } from '../services/data.service';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authSerice: AuthService,
    private router: Router,
    private dataService: DataService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // let user_login;
    // let user_id: any;
    return true
    // if (this.authSerice.isAuthenticated()) {
      // user_id = JSON.parse(localStorage.getItem('user')!)[0].admin_id;
      // return new Observable<boolean>((obs) => {
      //   this.dataService.getUserById(user_id).subscribe((res: any) => {
      //     user_login = res.data.is_login;
      //     if (user_login == true) {
      //       obs.next(true);
      //     } else {
      //       this.router.navigate(['/login']);
      //       obs.next(false);
      //     }
      //   });
      // });
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
}
