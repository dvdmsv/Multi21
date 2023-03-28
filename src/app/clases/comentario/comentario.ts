/**
 * Clase que representa un comentario realizado por un usuario
 */
export class Comentario {
  /**
   * Constructor de la clase Comentario
   * @param id numero identificativo del comentario
   * @param username nombre del usuario que realizó el comentario
   * @param carrera carrera sobre la que se realizó el comentario
   * @param texto texto escrito en el comentario
   * @param fecha fecha en la que se escribió el comentario
   */
  constructor(public id: number, public username: string, public carrera: number, public texto: string, public fecha: string){}
}
