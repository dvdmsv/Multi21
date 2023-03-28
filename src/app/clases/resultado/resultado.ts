/**
 * Clase que representa el resultado de un piloto en la temporada
 */
export class Resultado {
  /**
   * Constructor de la clase Resultado
   * @param posicion posicion del piloto
   * @param piloto nombre del piloto
   * @param escuderia nombre de la escudería
   * @param posSalida posicion en la que salía el piloto
   * @param status estado en el que terminó la carrera el piloto
   * @param puntos puntos que consiguió el piloto en esa carrera
   */
  constructor(public posicion: string, public piloto: string, public escuderia: string, public posSalida: string, public status: string, public puntos: string){}
}
