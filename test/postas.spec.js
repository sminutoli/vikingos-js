import { carrera, combate } from '../src/postas'

describe('Postas Test', () => {
  let vikingoBarbaro
  let vikingoNoTanBarbaro

  beforeEach(() => {
    vikingoBarbaro = {
      barbarosidad: 10,
      peso: 80
    }
    vikingoNoTanBarbaro = {
      barbarosidad: 9,
      peso: 40
    }
    combate.gradoBarbaridadRequerido = 10
  })
  test('cualquier vikingo puede participar de una carrera', () => {
    expect(carrera.puedeParticipar(vikingoNoTanBarbaro)).toBeTruthy()
  })
  test('un vikingo con nivel de barbarosidad suficiente puede participar de un combate', () => {
    expect(combate.puedeParticipar(vikingoBarbaro)).toBeTruthy()
  })
  test('un vikingo con nivel de barbarosidad insuficiente no puede participar de un combate', () => {
    expect(combate.puedeParticipar(vikingoNoTanBarbaro)).toBeFalsy()
  })
})