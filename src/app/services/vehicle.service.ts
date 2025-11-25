import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeiculoData, VeiculosAPI } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl = "http://localhost:3001"

  constructor(private http:HttpClient) { }

  //Metodos que busca a lista de veiculos lá na api
  getVehicles():Observable<VeiculosAPI>{
    return this.http.get<VeiculosAPI>(`${this.apiUrl}/vehicles`);
  }

  //Retorna os veiculo pelo vin
  getVeihiclesByVin(vin:string):Observable<VeiculoData>{
    return this.http.post<VeiculoData>(`${this.apiUrl}/vehicleData`,{vin})
  }
}
