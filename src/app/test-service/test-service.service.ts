import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    return true;
  }

  public login(): boolean {
    return true;
  }

  public logout(): boolean {
    return true;
  }

  public register(): boolean {
    return true;
  }

  public hasRole(role: string): boolean {
    return true;
  }
}