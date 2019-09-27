export const NIVEL_HAMBRE_LIMITE = 50

// primera variante, construyo un objeto
export const hipo = {
  barbarosidad: 10,
  velocidad: 13,
  peso: 80,
  nivelDeHambre: 0,
  participaDeUnaPosta: () => true // definimos una función dentro del objeto, se parece a un método
}

// otra variante, construyo una clase
class Vikingo {

  // para qué un constructor con los parámetros
  // 1. me aseguro que construir un objeto sea una operación atómica (no queda en
  // estado inconsistente)
  // 2. quiero que el vikingo sea inmutable
  constructor(peso, velocidad, barbarosidad) {
    this.peso = peso
    this.velocidad = velocidad
    this.barbarosidad = barbarosidad
    this.nivelDeHambre = 0
  }

  participaDeUnaPosta() {
    return true
  }
}

// además me exporto objetos instanciados a partir de una clase como constantes
export const astrid = new Vikingo(130, 10, 7)
export const patan = new Vikingo(100, 15, 13)

// Patapez, podría ser un objeto, en principio aprovechamos la clase
export class Patapez extends Vikingo {
  constructor(peso, velocidad, barbarosidad, nivelDeHambre = NIVEL_HAMBRE_LIMITE) {
    super(peso, velocidad, barbarosidad)
    this.nivelDeHambre = nivelDeHambre
  }

  pasarHambre(cuanto) {
    //this.nivelDeHambre = this.nivelDeHambre + cuanto
    return new Patapez(this.peso, this.velocidad, this.barbarosidad, this.nivelDeHambre + cuanto)
  }

  comer(cuanto) {
    // en lugar de this.nivelDeHambre = this.nivelDeHambre - cuanto  <== MUTABLE
    // devolvemos un nuevo patapez
    return new Patapez(this.peso, this.velocidad, this.barbarosidad, this.nivelDeHambre - cuanto)
  }

  participaDeUnaPosta() {
    return this.nivelDeHambre <= NIVEL_HAMBRE_LIMITE
  }
}