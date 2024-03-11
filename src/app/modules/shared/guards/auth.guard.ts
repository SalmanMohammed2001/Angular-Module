import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {Title} from "@angular/platform-browser";



@Injectable({
  providedIn:'root'
})

export class AuthGuard implements  CanActivate{

  constructor(private  routeService:Router,private authService:AuthService,private title:Title) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(this.authService.isExistToken('my-token')){
      return true

    }else {
      this.routeService.navigateByUrl('/security/login')
      return  false;
    }
  }

}
