//Bienvenida

alert ("Bienvenido/a!!!")

(function(){
    let iniciarSesion= function(){
        let userName =  "francisco";
        let nombre = prompt('Ingrese su usuario');
        if (nombre == userName) {
            alert( `Tu usuario es correcto`);
        } else {
            alert(`no ingresaste un usuario válido`);
        }
        let password =  "1234";
        let contraseña = prompt('Ingrese su contraseña');
        
        if (contraseña == password) {
            alert( `Tu contraseña es correcta`);
        } else {
            alert(`no ingresaste una contraseña válida`);
        }
        window.location.replace("./menu.html");
    };
    let boton = document.getElementById('boton');
    boton.addEventListener("click", iniciarSesion);
}())
function saldo() {
    let saldo2 =  150000;
    alert( `Tu saldo es: $${saldo2}`);
}


function retirar() {
    let saldo2 =  150000;
    let retirar2 =  prompt('¿Cuánto desea retirar?');
    let saldoActual = saldo2 - retirar2;

    if (retirar2 > saldo2) {
    alert( `El monto es mayor al saldo`);
    } 
    if (retirar2 < saldo2) {
    alert(`Su nuevo saldo es:${saldoActual}`);
    }
}

function depositar(){
    let saldo2 = 150000;
    let depositar2 = prompt(`¿Cuánto desea depositar?`);
    let nuevoSaldo = parseInt(saldo2) + parseInt(depositar2);
    alert(`Su nuevo saldo es $${nuevoSaldo}`)
}

function cambioContraseña(){
    let password =  "1234"
    let contraseña = prompt(`Ingrese su contraseña`);
    if (contraseña == password) {
        alert( `Ahora puede cambiar su contraseña`);
    }
    else {
        alert(`Ingresaste una contraseña no válida`);
    }
    let nuevaContraseña = prompt(`Ingrese su nueva contraseña`)
    let nuevaContraseña2 = prompt(`Confirme su nueva contraseña`)
    if (nuevaContraseña == nuevaContraseña2) {
        alert( `Tu nueva contraseña ha sido guardada con éxito`);
    }
    else {
        alert(`no ingresaste una contraseña válida`);
    }
}
function cerrarsesion(){
    window.location.replace("./index.html");
}






