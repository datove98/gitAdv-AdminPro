import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';



@NgModule({
  declarations: [
    BreadcrumsComponent,
    SidebarsComponent,
    HeaderComponent
  ],
  exports: [
    BreadcrumsComponent,
    SidebarsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
