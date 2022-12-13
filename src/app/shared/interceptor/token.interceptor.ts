import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    if(this.authService.isAuthenticated()) {
      let token = this.authService.getToken();
      request = request.clone({
        setHeaders: {
          "x-auth": `${token}`
        }
      })
    }
    return next.handle(request);
  }
}
