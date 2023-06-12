import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveBarreComponent } from './nave-barre.component';

describe('NaveBarreComponent', () => {
  let component: NaveBarreComponent;
  let fixture: ComponentFixture<NaveBarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveBarreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaveBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
