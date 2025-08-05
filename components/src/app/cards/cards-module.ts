import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { CardAzulButton } from '../card-azul-button/card-azul-button';
import { CardAzul } from '../card-azul/card-azul';
import { CardButton } from '../card-button/card-button';

// SEMPRE QUE EU QUISER USAR OS COMPONENTE DE UM MODULO EU TENHO QUE ALEM DE IMPORTAR ELE EU PRECISO EXPORTAR NA CLASSE DO MODULO QUE ESTA SENDO IMPORTADO

@NgModule({
  declarations: [
    Card,
    CardAzulButton,
    CardAzul,
    CardButton
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Card,
   // CardAzulButton, eu preciso exportar apenas os componentes que precisa
    CardAzul,
   // CardButton eu preciso exportar apenas os componentes que precisa
  ]
})
export class CardsModule { }
