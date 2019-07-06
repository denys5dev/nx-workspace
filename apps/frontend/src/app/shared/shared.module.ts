import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromMaterial from './material.index';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...fromMaterial.materialModule
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...fromMaterial.materialModule,
    ...fromComponents.components
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
