import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = true;

  public get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  public set userIsAuthenticated(value) {
    this._userIsAuthenticated = value;
  }

  constructor() { }

  login() {
      this._userIsAuthenticated = true;
  }
  
  logout() {
      this._userIsAuthenticated =  false;
  }
}
