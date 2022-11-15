import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProyecoUsuarioComponent } from './agregar-proyeco-usuario.component';

describe('AgregarProyecoUsuarioComponent', () => {
  let component: AgregarProyecoUsuarioComponent;
  let fixture: ComponentFixture<AgregarProyecoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProyecoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProyecoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
