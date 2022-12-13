import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckRouteGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return true;
    // const activeRoute = JSON.parse(localStorage.getItem('activeModule')!);
    // let subModules: any[] = [];
    // activeRoute.forEach((module: any) => {
    //   module.subModule.map((subModule: any) => {
    //     subModules.push(subModule.route);
    //   });
    // });

    // if (activeRoute != null) {
    //   let currRoute = '/' + route.routeConfig?.path;

    //   if (subModules.some((e) => e.includes(currRoute)) == true) {
    //     return true;
    //   } else {
    //     this.router.navigateByUrl('**');
    //     return false;
    //   }
    // } else {
    //   return false;
    // }
  }
}
