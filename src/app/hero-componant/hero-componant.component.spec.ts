import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponantComponent } from './hero-componant.component';

describe('HeroComponantComponent', () => {
  let component: HeroComponantComponent;
  let fixture: ComponentFixture<HeroComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
