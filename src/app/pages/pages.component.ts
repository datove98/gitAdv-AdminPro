import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  

  constructor(private settingserv?:SettingsService) { }

  ngOnInit(): void {
    //./assets/css/colors/default-dark.css
    
    //localStorage.setItem("theme",url);

    customInitFunctions();
  }

}
