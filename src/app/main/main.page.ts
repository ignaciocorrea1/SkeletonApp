import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  user = {
    username : "",
    password : ""
  };

  // Campos ingresados por el usuario
  userDatos = {
    nombre : "",
    apellido : "",
  };

  // Obtener nombre y apellido
  obtenerNombre() {
    // Se obtienen los campos
    const inpNom = document.getElementById("nombre") as HTMLInputElement;
    const inpApp = document.getElementById("apellido") as HTMLInputElement;

    this.userDatos.nombre = inpNom.value;
    this.userDatos.apellido = inpApp.value;
  }

  // Limpiar campos
  limpiarCampos() {
    // Se obtienen los inputs
    const inpNom = document.getElementById("nombre") as HTMLInputElement;
    const inpApp = document.getElementById("apellido") as HTMLInputElement;
    const selEdu = document.getElementById("nivelEducacion") as HTMLSelectElement;
    const fecNac = document.getElementById("datetime") as HTMLIonDatetimeElement;
    
    // Se vacian los campos
    inpNom.value = "";
    inpApp.value = "";
    selEdu.value = "";
    
    // Se obtiene la fecha actual en formato yyyy-MM-dd
    const today = new Date().toLocaleDateString("en-CA"); 

    // Se asigna la fecha actual al ion-datetime
    if (fecNac) {
      fecNac.value = today;
    }
  };

  constructor(private router:Router) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: '';
      password: '';
    };
    this.user.username = state.username;
    this.user.password = state.password;
  };

  ngOnInit() {
  };
};
