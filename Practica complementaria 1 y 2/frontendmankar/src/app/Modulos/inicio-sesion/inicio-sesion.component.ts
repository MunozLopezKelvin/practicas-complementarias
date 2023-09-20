import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/clases';
import { ServiciosService } from 'src/app/Services/servicios.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent implements OnInit {
  public iniciong = false;
  public contrang = false;
  public exito = false;
  public InicioS: any = [];

  usuarioModel =  new Usuarios(0, "", "", "", true, "", 0);

  constructor(
    private ServicioInicioSesion: ServiciosService,
  ) {}

  ngOnInit(): void {}

  InicioSesion() {
    const usuarioDNI = this.usuarioModel.USUARIO_DNI;

    this.ServicioInicioSesion.CargarUsuario(usuarioDNI).subscribe(
      (Respuesta) => {
        if (Respuesta.USUARIO_PASSWORD == this.usuarioModel.USUARIO_PASSWORD) {
          this.exito = true;
          console.log("KASKAFSJASJF");
          console.log(Respuesta.USUARIO_DNI);
          window.location.href = `/principal`;
        } else {
          this.contrang = true;
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        }
      },
      (err) => {
        this.iniciong = true;
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    );
  }
}
