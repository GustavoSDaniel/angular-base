import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAzulButton } from './card-azul-button';

describe('CardAzulButton', () => {
  let component: CardAzulButton;
  let fixture: ComponentFixture<CardAzulButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardAzulButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAzulButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
