import { Component } from '@angular/core';
import { Piloto } from 'src/app/clases/piloto/piloto';
import { ApiF1Service } from 'src/app/servicios/api-f1/api-f1.service';
import { SeguimientoPilotosService } from 'src/app/servicios/seguimientoPilotosBD/seguimiento-pilotos.service';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css']
})
export class PilotosComponent {

  pilotos: any;

  arrPilotos: Piloto[] = [];

  arrPilotosSeguidos: any = [];

  columnasPiloto = ['familyName', 'seguir'];

  constructor(private apiF1: ApiF1Service, private seguimientoPilotosService: SeguimientoPilotosService){}

  ngOnInit(){
    let usuario = localStorage.getItem("username");
    //Se obtienen todos los pilotos que ya sigue el usuario
    this.seguimientoPilotosService.getPilotosSeguidos(usuario).subscribe(result=>{
      this.arrPilotosSeguidos = result;
      for (const piloto of this.arrPilotosSeguidos) {
        //console.log(piloto.piloto);
      }
    });

    this.apiF1.getPilotos().subscribe(result =>{
      this.pilotos = result;
      this.arrPilotos = [];
      let existe: boolean = false;
      for(const piloto of this.pilotos.MRData.DriverTable.Drivers){
        //Comprobar los pilotos que ya sigue
        existe = false;
        for (const pilotoSeguido of this.arrPilotosSeguidos) {
          if(pilotoSeguido.piloto == piloto.driverId){ //Se encuentra en el array de seguidos
            existe = true; //Se establece la variable en true
          }
        }
        if(existe == false){ //Si la variable ha permanecido false se introduce el piloto en el array
          this.arrPilotos.push(
          new Piloto(
            piloto.driverId,
            piloto.familyName,
            piloto.nationality,
            piloto.url
          ));
        }
      }
    });
  }

  seguir(piloto: string){
    let usuario = localStorage.getItem("username");
    this.seguimientoPilotosService.seguirPiloto(usuario, piloto).subscribe((result)=> console.log("Seguido"));
    window.location.reload();
  }
}
