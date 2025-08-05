import { Component } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})

export class Card {
  // @ts-ignore
  plano: IPlano = {
    infos: {
      tipo: `Simples`,
      preco: 100
    }
  };
  

}

