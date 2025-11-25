import { Component } from '@angular/core';

import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
import { Veiculo, VeiculoData } from '../models/veiculo.model';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, NgIf,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  vehicles:Veiculo[]=[];
  selectedVehicle:Veiculo|null=null

  foundVehicleData: VeiculoData|null=null;
  searchError: string|null=null

  constructor(private vehicleService:VehicleService){}

  //função que inicia quando o componente é chamado
  ngOnInit():void{
    this.vehicleService.getVehicles().subscribe(response =>{
      this.vehicles = response.vehicles
    })
  }

  onVehicleSelect(event:Event):void{
    const selectedId = (event.target as HTMLSelectElement).value;
    if(selectedId){
      //se selecionado, ele encontra o objeto do veiculo da lista da API
      this.selectedVehicle = this.vehicles.find(v=>v.id==Number(selectedId))||null;
    }else{
      this.selectedVehicle=null
    }
  }

  searchByVin(vin:string):void{
    if(!vin) return;

    this.foundVehicleData = null //limpa os resultados
    this.searchError = null // limpar mensagens de erro

    this.vehicleService.getVeihiclesByVin(vin).subscribe({
      next:(data)=>{
        //se encontrar
        this.foundVehicleData=data
      },
      
    
    error:(err)=>{
      console.error("erro")
      this.searchError = err.error.message||"falhou na busca"
    }
  })
  }
}
