import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  // Se crea un objeto del tipo usuario
  user = {
    "username": "",
    "password": ""
  };

  // Funcion para validar los datos del login
  validarLogin() {
    // Expresion regular para validar que la contraseña sea solo numerica
    let regexpPass = /^[0-9]+$/;

    // Mensaje de error
    let errorMsg = document.getElementById("error-msg");

    // Se resetea la ruta del ingreso

    // Se resetea la visibilidad del mensaje de error
    if (errorMsg) {
      errorMsg.style.display = "none";
    };

    // Si el usuario es mayor a 3 caracteres y menor a 8
    if(this.user.username.length >= 3 && this.user.username.length <= 8) {
      // Si la password es igual 4 digitos
      if(this.user.password.length === 4 && regexpPass.test(this.user.password)) {
        // Se obtienen los campos
        let userInp = document.getElementById("username") as HTMLInputElement | null;
        let passInp = document.getElementById("password") as HTMLInputElement | null;

        // Se vacian los campos
        if (userInp && passInp) {
          userInp.value = "";
          passInp.value = "";
        } else {
          if (errorMsg) {
            errorMsg.textContent = "Error al intentar logearse.";
            errorMsg.style.display = "block";
          };
        };
        
        // Se envian los datos a la otra pagina
        let navigationExtras : NavigationExtras = {
          state: {
            username: this.user.username,
            password: this.user.password
          },
        };
        // Se redirecciona a la otra pagina
        this.router.navigate(['/main'], navigationExtras)

        console.log("Usuario: "+this.user.username)
        console.log("Password: "+this.user.password)
      } else {
        // La contraseña esta incorrecta y se manda un mensaje al usuario

        // Debe estar dentro de un if porque es posible null
        if (errorMsg) {
          errorMsg.textContent = "La contraseña debe ser numérica y de 4 dígitos.";
          errorMsg.style.display = "block";
        };

        console.log("La contraseña esta incorrecta")
      };
    } else {
      // El usuario está incorrecto y se manda un mensaje al usuario
        if (errorMsg) {
          errorMsg.textContent = "El usuario debe tener mínimo 3 carácteres y máximo 8.";
          errorMsg.style.display = "block";
        };
      console.log("El usuario está incorrecto");
    };
  };
};
