import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetPokemonNameComponent } from './widget-pokemon-name.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WidgetPokemonNameComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WidgetPokemonNameComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetPokemonNameModule { }
