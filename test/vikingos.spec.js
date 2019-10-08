import { hipo, Patapez, Vikingo, NIVEL_HAMBRE_LIMITE_PATAPEZ } from '../src/vikingos'
import { carrera } from '../src/postas'

describe('Vikingos Test', () => {
    let astrid
    let patan
    let patapez

    beforeEach(() => {
        astrid = new Vikingo({ peso: 130, velocidad: 10, barbarosidad: 7 })
        patan = new Vikingo({ peso: 100, velocidad: 15, barbarosidad: 13 })
        patapez = new Patapez({ peso: 70, velocidad: 7, barbarosidad: 1 })
    })
    test('hipo puede participar de una carrera si tiene barbarosidad suficiente', () => {
        expect(hipo.puedeParticiparDeUnaPosta(carrera)).toBeTruthy()
    })
    test('hipo no puede participar de una carrera si no tiene barbarosidad suficiente', () => {
        hipo.barbarosidad = 9
        expect(hipo.puedeParticiparDeUnaPosta(carrera)).toBeFalsy()
    })
    test('patapez con hambre justa puede participar de una posta', () => {
        patapez.nivelDeHambre = NIVEL_HAMBRE_LIMITE_PATAPEZ
        expect(patapez.participaDeUnaPosta(carrera)).toBeTruthy()
    })
    test('patapez con mucha hambre no puede participar de una posta', () => {
        patapez.nivelDeHambre = NIVEL_HAMBRE_LIMITE_PATAPEZ + 1
        expect(patapez.participaDeUnaPosta(carrera)).toBeFalsy()
    })
    test('lcdtmjs!', () => {
        patapez.nivelHambre = 10000000000000
        expect(patapez.participaDeUnaPosta(carrera)).toBeTruthy()
        // por qué? por qué? adivinalo
    })
})