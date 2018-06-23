import { TestBed, inject } from '@angular/core/testing';

import { TareasPendientesService } from './tareas-pendientes.service';

describe('TareasPendientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasPendientesService]
    });
  });

  it('should be created', inject([TareasPendientesService], (service: TareasPendientesService) => {
    expect(service).toBeTruthy();
  }));
});
