import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  generateUniqueId() {
    const timestamp = Date.now().toString(36); // Obtén la marca de tiempo actual y conviértela a base36
    const randomString = Math.random().toString(36).substring(2, 8); // Genera una cadena aleatoria y corta algunos caracteres
  
    return timestamp + randomString;
  }
}
