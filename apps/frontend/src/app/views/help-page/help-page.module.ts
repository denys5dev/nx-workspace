import { NgModule } from '@angular/core';
import { HelpPageComponent } from './help-page.component';
import { SharedModule } from '../../shared/shared.module';
import { HelpPageRoutingModule } from './help-page-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HelpPageRoutingModule
  ],
  declarations: [HelpPageComponent]
})
export class HelpPageModule { }
