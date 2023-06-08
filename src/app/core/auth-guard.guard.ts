import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  token = '';

  constructor(
    private storage: Storage
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(this.isAuthenticated());

    if (!this.isAuthenticated()) {
      return true
    }
    else {
      return false
    }

  }



  isAuthenticated() {
    this.storage.get('USER_LOGGED').then(user => {
      if (!user || user.length < 1) {
        return false
      }
      else {
        return true
      }
    })
    return false
  }

}
