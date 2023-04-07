import { Component } from '@angular/core';
import { Piloto } from 'src/app/clases/piloto/piloto';
import { ApiF1Service } from 'src/app/servicios/api-f1/api-f1.service';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css']
})
export class PilotosComponent {

  pilotos: any;

  arrPilotos: Piloto[] = [];

  columnasPiloto = ['driverID', 'familyName', 'nationality', 'seguir'];

  constructor(private apiF1: ApiF1Service){}

  ngOnInit(){
    this.apiF1.getPilotos().subscribe(result =>{
      this.pilotos = result;
      this.arrPilotos = [];
      for(const piloto of this.pilotos.MRData.DriverTable.Drivers){
        this.arrPilotos.push(
          new Piloto(
            piloto.driverId,
            piloto.familyName,
            piloto.nationality
        ));
      }
      console.log(this.arrPilotos);
    });
  }
}
