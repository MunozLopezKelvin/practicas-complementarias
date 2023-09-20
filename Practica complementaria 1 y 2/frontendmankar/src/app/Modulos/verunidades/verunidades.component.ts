import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service'; // Importa tu servicio aquí
@Component({
  selector: 'app-verunidades',
  templateUrl: './verunidades.component.html',
  styleUrls: ['./verunidades.component.css'],
})

export class VerunidadesComponent implements OnInit {
  unidades: any = []; // Aquí almacena la lista de usuarios

  constructor(private serviceServices: ServiciosService) {}

  ngOnInit(): void {
    // Llama a un servicio o realiza una solicitud HTTP para obtener la lista de usuarios
    this.serviceServices.getUnidades().subscribe(
      (data) => {
        // Verifica que la respuesta sea válida y asigna los datos a la propiedad Usuarios
        if (Array.isArray(data.datos)) {
          this.unidades = data.datos;
        } else {
          console.error('La respuesta del servicio no es un arreglo válido.');
        }
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios: ', error);
      }
    );
  }
}

