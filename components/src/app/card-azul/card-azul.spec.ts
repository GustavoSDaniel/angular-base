import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAzul } from './card-azul';

describe('CardAzul', () => {
  let component: CardAzul;
  let fixture: ComponentFixture<CardAzul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardAzul]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAzul);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
