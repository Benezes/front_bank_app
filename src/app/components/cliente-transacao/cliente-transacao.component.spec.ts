import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTransacaoComponent } from './cliente-transacao.component';

describe('ClienteTransacaoComponent', () => {
  let component: ClienteTransacaoComponent;
  let fixture: ComponentFixture<ClienteTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteTransacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
