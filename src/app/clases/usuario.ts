export class Usuario {
  public username: String;
  public password: String;
  public admin: Boolean;

  constructor(username: String, password: String; admin: boolean){
    this.username = username;
    this.password = password;
    this.admin = admin;
  }
}
