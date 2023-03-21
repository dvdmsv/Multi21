import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/esm/md5';

@Injectable({
  providedIn: 'root'
})
export class Md5Service {

  constructor() { }

  encriptar(texto: string){
    const md5 = new Md5();
    return md5.appendStr(texto).end();
  }
}
