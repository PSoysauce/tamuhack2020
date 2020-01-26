import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginService } from '../../services/login.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loadingEnable: boolean;
  sidenavEnable = false;

  @Output()
  sidenav = new EventEmitter();

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  constructor(public dialog: MatDialog, private router: Router, 
    public loginService: LoginService,
    public loadingService: LoadingService) { }


  ngOnInit() {
    window.onload = function fillusr_data(){
      document.getElementById("points").innerHTML="9999 points";
      document.getElementById("name").innerHTML="Jimmy Nutron";
    };
   
  }


  enableSidenav() {
    this.sidenavEnable = !this.sidenavEnable;
  }
}
