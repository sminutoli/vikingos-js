import {hipo, Patapez} from "../src/vikingos"

const patapez = new Patapez(70, 7, 1)

describe('Vikingos Test', () => {
    test("un vikingo común puede participar de una posta", () => {
        expect(hipo.participaDeUnaPosta()).toBe(true)
    })
    test("patapez sin tanta hambre puede participar de una posta", () => {
        expect(patapez.comer(1).participaDeUnaPosta()).toBe(true)
    })
    test("caso borde => patapez puede participar de una posta con cantidad de hambre justa", () => {
        expect(patapez.participaDeUnaPosta()).toBe(true)
    })
    test("patapez con mucha hambre no puede participar de una posta", () => {
        expect(patapez.pasarHambre(1).participaDeUnaPosta()).toBe(false)
    })
})