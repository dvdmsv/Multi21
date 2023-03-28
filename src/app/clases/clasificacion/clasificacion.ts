/**
 * Clase que representa a un piloto en la clasificación de la temporada
 */
export class Clasificacion {
  /**
   * Constructor de la clase Clasificacion
   * @param posicion posicion del piloto
   * @param piloto nombre del piloto
   * @param escuderia nombre de la escudería
   * @param puntos puntos que tiene el piloto
   * @param victorias victorias que cosecha el piloto
   */
  constructor(public posicion: string, public piloto: string, public escuderia: string, public puntos: string, public victorias: string){}
}
