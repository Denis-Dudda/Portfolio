import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './shared/nav/nav.component';
import { SocialIconsComponent } from './shared/social-icons/social-icons.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillSetComponent } from './my-skill-set/my-skill-set.component';

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
    MySkillSetComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  ngAfterViewInit(): void {
    // Event Listener für das horizontale Scrollen mit passive: false hinzufügen
    window.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault(); // Verhindert das Standard-Scroll-Verhalten (vertikal)

      // Horizontales Scrollen basierend auf der Delta-Werte des Mausrads
      window.scrollBy({
        left: event.deltaY < 0 ? -500 : 500, // Scrollt nach links oder rechts, je nach Richtung des Mausrads
        behavior: 'smooth', // Sanftes Scrollen
      });
    }, { passive: false }); // passive auf false setzen wegen neuem Browserschutz
  }
}






