import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, NavComponent, MenuComponent]
})
export class LayoutModule { }
