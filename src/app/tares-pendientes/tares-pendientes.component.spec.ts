import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaresPendientesComponent } from './tares-pendientes.component';

describe('TaresPendientesComponent', () => {
  let component: TaresPendientesComponent;
  let fixture: ComponentFixture<TaresPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaresPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaresPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
