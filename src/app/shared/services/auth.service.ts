import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgStorage, StorageTypeUnit } from 'ng-storage-local';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable()
export class AuthService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient, private storage: NgStorage) {}

  // Login
  login(user: any) {
    return this.http.post(this.url + '/admin/login', user);
  }

  // Store User to local storage
  storeUserAndToken(data: any) {
    this.storage.setLocalStorage({
      storageData: data.userData,
      storageKey: 'user',
      storageType: StorageTypeUnit.JSON,
    });
    this.storage.setLocalStorage({
      storageData: data.token,
      storageKey: 'token',
      storageType: StorageTypeUnit.STRING,
    });
    this.storage.setLocalStorage({
      storageData: data.Enabled_Module_List,
      storageKey: 'enabled_module',
      storageType: StorageTypeUnit.JSON,
    });
  }

  // Get Token
  getToken() {
    return localStorage.getItem('token');
  }

  // Check Authentication
  isAuthenticated() {
    const token = this.getToken();
    if (token) {
      if (helper.isTokenExpired(token)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
