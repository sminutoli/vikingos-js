export const pesca = {
  pesoMinimo: 0,
  puedeParticipar(participante) {
    return participante.puedeLevantar(this.pesoMinimo)
  }
}

export const combate = {
  gradoBarbaridadRequerido: 0,
  puedeParticipar(participante) {
    return participante.barbarosidad >= this.gradoBarbaridadRequerido
  }
}

export const carrera = {
  puedeParticipar(participante) {
    return true
  }
}
