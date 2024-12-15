import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponantComponent } from './nav-componant.component';

describe('NavComponantComponent', () => {
  let component: NavComponantComponent;
  let fixture: ComponentFixture<NavComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
