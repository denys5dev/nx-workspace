import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromMaterial from './material.index';

@NgModule({
  imports: [
    CommonModule,
    ...fromMaterial.materialModule
  ],
  exports:[
    CommonModule,
    ...fromMaterial.materialModule
  ]
})
export class SharedModule { 
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
