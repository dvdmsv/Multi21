/**
 * Clase que representa a un usuario de la base de datos
 */
export class Usuario {
  /**
   * Constructor de la clase Usuario
   * @param id numero identificativo del usuario
   * @param username nombre de usuario
   * @param password contraseña del usuario
   * @param admin parámetro que almacena 0 si el usuario no es administrador y 1 si es administrador
   */
  constructor(public id: number, public username: string, public password: string, public admin: number){}
}
