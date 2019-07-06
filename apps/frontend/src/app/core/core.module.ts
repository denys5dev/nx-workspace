import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: []
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if(core) {
      console.log('You shall not run!')
    }
  }
}
