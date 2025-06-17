const numeroSecreto = Math.floor(Math.random() * 500) + 1;
let intentos = 0;

function adivinar() {
    const entrada = document.getElementById('numero').value;
    const numero = parseInt(entrada, 10);//es la base numérica (o "radix") en la que se debe interpretar la cadena de texto. Se ha puesto 10 porque estamos trabajando con los números normales que usamos todos los días (del 0 al 9).
    const resultado = document.getElementById('resultado');
    const boton = document.getElementById('btnAdivinar');
    intentos++;

    if (isNaN(numero) || numero < 1 || numero > 500) {
        resultado.textContent = "⚠️ Por favor, ingresa un número válido entre 1 y 500.";
        return;
    }

    const diferencia = Math.abs(numeroSecreto - numero);//devuelve el valor absoluto de un número, es decir, convierte cualquier número negativo en positivo (por ejemplo, Math.abs(-5) devuelve 5).

    if (numero === numeroSecreto) {
        resultado.textContent = `Excelente! El número era ${numeroSecreto}. Has ganado!  (${intentos} intentos).`;
        boton.classList.add("oculto"); // Oculta el botón
        document.body.style.backgroundImage = "url('img/magia.jpg')";
    } else {
        let mensaje = "";

        if (diferencia >= 50) {
            mensaje = "🙅‍♀️ Frío, frío: ";
            document.body.style.backgroundImage = "url('img/hielo.webp')";
        } else if (diferencia >= 15 && diferencia < 50) {
            mensaje = "🙅‍♀️ Tibio, tibio: ";
            document.body.style.backgroundImage = "url(img/campo.jpg)";
        } else {
            mensaje = "🙅‍♀️ Caliente, caliente: ";
            document.body.style.backgroundImage = "url(img/fuego.jpg)";
        }

        if (numero > numeroSecreto) {
            mensaje += "tu número es mayor al mío. 🤖";
        } else {
            mensaje += "tu número es menor al mío. 🤖";
        }

        resultado.textContent = mensaje;

        console.log(`Respuesta correcta: ${numeroSecreto}`);
        console.log(`intentos: ${intentos}`);
    }
}