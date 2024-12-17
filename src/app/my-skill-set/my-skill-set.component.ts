import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';




@Component({
  selector: 'app-my-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skill-set.component.html',
  styleUrl: './my-skill-set.component.scss'
})
export class MySkillSetComponent {

  icons = [
    { src: 'assets/icons/Property 1.svg', label: 'Icon 1', property: 'Angular' },
    { src: 'assets/icons/Property 2.svg', label: 'Icon 2', property: 'Angular' },
    { src: 'assets/icons/Property 3.svg', label: 'Icon 3', property: 'Angular' },
    { src: 'assets/icons/Property 4.svg', label: 'Icon 4', property: 'Angular' },
    { src: 'assets/icons/Property 5.svg', label: 'Icon 5', property: 'Angular' },
    { src: 'assets/icons/Property 6.svg', label: 'Icon 6', property: 'Angular' },
    { src: 'assets/icons/Property 7.svg', label: 'Icon 7', property: 'Angular' },
    { src: 'assets/icons/Property 8.svg', label: 'Icon 8', property: 'Angular' },
    { src: 'assets/icons/Property 9.svg', label: 'Icon 9', property: 'Angular' },
    { src: 'assets/icons/Property 10.svg', label: 'Icon 10', property: 'Angular' },
    { src: 'assets/icons/Property 11.svg', label: 'Icon 11', property: 'Angular' }
  ];
}
