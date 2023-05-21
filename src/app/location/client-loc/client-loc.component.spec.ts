import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLocComponent } from './client-loc.component';

describe('ClientLocComponent', () => {
  let component: ClientLocComponent;
  let fixture: ComponentFixture<ClientLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
