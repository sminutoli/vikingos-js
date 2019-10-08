// primera variante, construyo un objeto
const vikingoDefault = {
  puedeParticiparDeUnaPosta(posta) {
    return posta.puedeParticipar(this)
  }
}

export const hipo = {
  __proto__: vikingoDefault,
  nombre: 'Hipo',
  velocidad: 13,
  barbarosidad: 10,
  peso: 80,
  hambre: 0,
  puedeParticiparDeUnaPosta(posta) {
    return this.barbarosidad >= 10 && super.puedeParticiparDeUnaPosta(posta)
  },
}

// otra variante, construyo una clase
export class Vikingo {

  // para qué un constructor con los parámetros
  // 1. me aseguro que construir un objeto sea una operación atómica (no queda en
  // estado inconsistente)
  // 2. quiero que el vikingo sea inmutable
  constructor(props) {
    this.nivelDeHambre = 0
    return Object.assign(this, props)
  }

  puedeParticiparDeUnaPosta(posta) {
    return posta.puedeParticipar(this)
  }

  participaDeUnaPosta(posta) {
    return this.puedeParticiparDeUnaPosta(posta);
  }
}

export const NIVEL_HAMBRE_LIMITE_PATAPEZ = 50

export class Patapez extends Vikingo {
  puedeParticiparDeUnaPosta(posta) {
    return this.nivelDeHambre <= NIVEL_HAMBRE_LIMITE_PATAPEZ && super.puedeParticiparDeUnaPosta(posta)
  }
}