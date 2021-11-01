

// 1er paso: hacer git status.
// 2do paso: hacer git add  archivo-ejemplo.js
// 3er paso: hacer git commit -m "mensaje ej: cambio de nombre de archivo" 
// 4to paso: hacer git push
// 5to paso: hacer git status nuevamente y ver que no hay cambios.  Si no hay cambios, es que todo está bien y este archivo ya está en el repositorio.
// este es el msj de git: "Your branch is up-to-date with 'origin/master' nothng to commit, working directory clean."




function tieneEmail(usuario) {


    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:

    var nuemro = 8;
  
    if (usuario['email']) {
      return true
    }else return false;
  
   
  }