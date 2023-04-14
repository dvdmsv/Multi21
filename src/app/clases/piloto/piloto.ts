/**
 * Clase que representa a un piloto
 */
export class Piloto {
  /**
   * Constructor de la clase Piloto
   * @param id identificador único de piloto
   * @param nombre nombre identificativo del piloto
   * @param nacionalidad nacinalidad del piloto
   * @param url de la wikipedia del piloto
   */
  constructor(public id: string, public nombre: string, public nacionalidad: string, public url: string, public seguido: boolean){}
}
