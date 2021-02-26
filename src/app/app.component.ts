import { Component,OnInit } from '@angular/core';
import { authService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTaskNew';
  constructor(private authService:authService){}
  ngOnInit(){
      this.authService.autoLogin();
    }
}