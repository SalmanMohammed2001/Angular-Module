import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/service/auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email='';
  password=''

  constructor(private router:Router,private authService:AuthService,private title:Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('security| login')
    if(this.authService.isExistToken('my-token')){
      //verify
      this.router.navigateByUrl('/console').then();
    }
  }

  login(){
    if(this.email==='s@gmail.com' && this.password==='1234'){
      this.authService.createToken(this.email);
      this.router.navigateByUrl('/console').then();
    }else {
      alert("wrong input")
    }
  }
}
