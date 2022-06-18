import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.css']
})
export class SidebarsComponent implements OnInit {

  menuItems: any[];

  constructor(private sidebarService: SidebarService) { 
    this.menuItems = sidebarService.menu;
  }

  ngOnInit(): void {
  }

}
