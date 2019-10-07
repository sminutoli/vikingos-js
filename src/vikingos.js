export const NIVEL_HAMBRE_LIMITE_PATAPEZ = 50

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
  constructor(props) {
    this.nivelDeHambre = 0
    Object.assign(this, props)
    // TIP: para devolver un objeto que no se puede modificar
    return Object.freeze(this)
  }

  participaDeUnaPosta() {
    return true
  }
}

// además me exporto objetos instanciados a partir de una clase como constantes
export const astrid = new Vikingo({peso: 130, velocidad: 10, barbarosidad: 7})
export const patan = new Vikingo({peso: 100, velocidad: 15, barbarosidad: 13})

// Patapez, podría ser un objeto, en principio aprovechamos la clase
export class Patapez extends Vikingo {
  pasarHambre(cuanto) {
    //this.nivelDeHambre = this.nivelDeHambre + cuanto
    return new Patapez({
      ...this,
      nivelDeHambre: this.nivelDeHambre + cuanto
    })
  }

  comer(cuanto) {
    // en lugar de this.nivelDeHambre = this.nivelDeHambre - cuanto  <== MUTABLE
    // devolvemos un nuevo patapez
    return new Patapez({
      ...this,
      nivelDeHambre: this.nivelDeHambre - cuanto
    })
  }

  participaDeUnaPosta() {
    return this.nivelDeHambre <= NIVEL_HAMBRE_LIMITE_PATAPEZ
  }
}