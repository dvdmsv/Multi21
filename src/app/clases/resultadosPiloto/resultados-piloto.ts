/**
 * Clase que representa el resultado de un piloto en una carrera
 */
export class ResultadosPiloto {
  /**
   * Constructor de ResultadosPiloto
   * @param ronda numero de la carrera
   * @param carrera nombre de la carrera
   * @param fecha fecha de la carrera
   * @param posicionParrilla posición que ocupaba el piloto en la parrrilla
   * @param posicionFinal posición en la que acabó el piloto en la parrilla
   * @param status estatus al finalizar la carrera
   * @param puntos puntos conseguidos
   */
  constructor(public ronda: string, public carrera: string, public fecha: string, public posicionParrilla: string, public posicionFinal: string, public status: string, public puntos: string){}
}
