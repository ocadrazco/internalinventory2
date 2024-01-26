import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class validaruserGuard implements CanActivate {

    iduser: any;

    constructor(private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      this.iduser= sessionStorage.getItem('id');
      if (this.iduser == null) {
         this.router.navigate(['login']);
         return false;
      }
         return true;
    }
}





// export const validaruserGuard: CanActivateFn = (route, state) => { return true;}
