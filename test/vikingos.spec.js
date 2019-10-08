import {hipo, Patapez, NIVEL_HAMBRE_LIMITE_PATAPEZ} from '../src/vikingos'

const patapez = new Patapez({nivelDeHambre: NIVEL_HAMBRE_LIMITE_PATAPEZ, peso: 7, velocidad: 1})

describe('Vikingos Test', () => {
    test('un vikingo es inmutable', () => {
        expect(() => {
            patapez.barbarosidad = 2
        }).toThrow(TypeError)
    })
    test('un vikingo común puede participar de una posta', () => {
        expect(hipo.participaDeUnaPosta()).toBe(true)
    })
    test('patapez sin tanta hambre puede participar de una posta', () => {
        expect(patapez.comer(1).participaDeUnaPosta()).toBe(true)
    })
    test('caso borde => patapez puede participar de una posta con cantidad de hambre justa', () => {
        expect(patapez.participaDeUnaPosta()).toBe(true)
    })
    test('patapez con mucha hambre no puede participar de una posta', () => {
        expect(patapez.pasarHambre(1).participaDeUnaPosta()).toBe(false)
    })
})