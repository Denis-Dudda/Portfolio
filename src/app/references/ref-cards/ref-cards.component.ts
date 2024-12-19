import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Card {
  description: string;
  fullName: string;
  projekt: string;
}

@Component({
  selector: 'app-ref-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ref-cards.component.html',
  styleUrl: './ref-cards.component.scss'
})
export class RefCardsComponent {
  @Input() card?: Card;

  ngOnChanges() {
    console.log('Received card:', this.card); // Überprüfe, ob `card` hier korrekt ankommt
  }
}
