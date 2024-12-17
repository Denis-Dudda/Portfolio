import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './shared/nav/nav.component';
import { SocialIconsComponent } from './shared/social-icons/social-icons.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillSetComponent } from './my-skill-set/my-skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    NavComponent,
    SocialIconsComponent,
    WhyMeComponent,
    MySkillSetComponent,
    MyWorkComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // Horizontales Scrollen mit Mausrad
      window.addEventListener('wheel', (event: WheelEvent) => {
        event.preventDefault();

        window.scrollBy({
          left: event.deltaY < 0 ? -500 : 500,
          behavior: 'smooth'
        });
      }, { passive: false });

      // Maus-Ziehen für horizontales Scrollen
      let isMouseDown = false;
      let startX: number;
      let scrollLeft: number;

      const onMouseDown = (e: MouseEvent) => {
        isMouseDown = true;
        startX = e.pageX;
        scrollLeft = window.scrollX;

        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none'; // Verhindert Text-Markierung
      };

      const onMouseMove = (e: MouseEvent) => {
        const speedFactor = 1.0; // Faktor für die Zieh-Geschwindigkeit
        if (!isMouseDown) return;
        const x = e.pageX; // Aktuelle Mausposition
        const walk = (startX - x) * speedFactor; // Geschwindigkeit erhöhen/verringern
        window.scrollTo({
          left: scrollLeft + walk,
          behavior: 'auto'
        });
      };

      const onMouseUp = () => {
        isMouseDown = false;

        document.body.style.cursor = 'default';
        document.body.style.userSelect = ''; // Text-Markierung wieder aktivieren
      };

      // Event Listener hinzufügen
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('mouseleave', onMouseUp);
    }
  }
}








