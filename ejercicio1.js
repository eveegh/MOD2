// Ejercicio 1: CONDICIONALES
// UNO
console.log("--------------EJERCICIO 1------------")

let persona = prompt("¿Eres bellisimo/a?").toLowerCase;

if(persona === "si"){
    console.log("Ciertamente");
} else {
    console.log("No te creo");
}

//DOS
console.log("--------------EJERCICIO 2------------")

let numero = prompt("Por favor, ingresa un número");

if(numero % 2 == 0){
    console.log(numero + " es divisible entre 2")
} else{
    console.log(numero + " no es divisible entre 2")
}

// TRES

console.log("--------------EJERCICIO 3------------")

let numero2 = prompt("Por favor, ingresa un número");
if(numero2 % 2 == 0){
    alert(numero2 + " es par")
} else{
    alert(numero2 + " es impar")
}

// CUATRO
console.log("--------------EJERCICIO 4------------")
let numeroCliente =prompt("Por favor, ingresa tu número de cliente");
if( numeroCliente == 1000){
    console.log("GANASTE UN PREMIO!!")
} else{
    console.log(numeroCliente + " lo sentimos, sigue participando")
}

// CINCO
console.log("--------------EJERCICIO 5------------")
let noUno = prompt("Por favor, ingresa un primer número")
let noDos = prompt("Por favor, ingresa un segundo número")

if(noUno < noDos){
 console.log(noUno + " es menor que " + noDos)
} else{
    console.log(noDos + " es menor que " + noUno)
}

// SEIS
console.log("--------------EJERCICIO 6------------");
let NoA = prompt("Por favor, ingresa un primer número");
let NoB = prompt("Por favor, ingresa un segundo número");
let NoC = prompt("Por favor, ingresa un tercer número");

if(NoA > NoB && NoA > NoC){
    console.log(NoA + " es mayor que el segundo número"+ NoB + " y el tercer número " + NoC)
    } else if (NoB > NoC && NoB > NoA){
        console.log(NoB + " es mayor que el primer número "+ NoA + " y el tercer número " + NoC)
    } else if (NoC > NoA && NoC > NoB){
        console.log(NoC + " es mayor que el primer número "+ NoA + " y el segundo número " + NoB)
    } else if (NoA > NoB && NoA == NoC){
        console.log(NoA + " es mayor que el segundo número " + NoB + " e igual que el tercer número " + NoC)
    } else if(NoB > NoA && NoB == NoC){
        console.log(NoB + " es mayor que el primer número "+ NoA + " e igual que el tercer número " + NoC)
    } else{
        console.log("Los tres números ingresados son iguales")
    }

// SIETE
console.log("--------------EJERCICIO 7------------")
let dia = prompt("Ingresa un día de la semana").toLocaleLowerCase();

if(dia==="lunes"){
    console.log("Hoy es " + dia + " Feliz inicio de semana")
} else if(dia === "viernes"){
    console.log("Hoy es " + dia + " inicia el fin de semana 😎")
} else if(dia === "sabado" || dia === "domingo"){
    console.log("Hoy es " + dia + " ¡Disfruta el fin de semana! 🤩")
}else{
    console.log("hoy es " + dia + " Ánimo, ya mero es fin de semana")
}

// OCHO
console.log("--------------EJERCICIO 8------------")
let calif= prompt("Ingresa tu calificación (1 a 10)");

if (calif < 1){
    console.log("❌¡ERROR!, Vuelve a ingresar tu calificación, debe ser mayor a 1 y menor que 10)")
} else if (calif < 6){
    console.log(calif+ " Reprobado 💀")
} else if( calif == 6 || calif <= 8){
    console.log(calif+ " Regular 🙂")
} else if(calif == 9){
    console.log(calif+ " Bien 😌")
} else if(calif == 10){
    console.log(calif+ " Excelente! 😄")
} else{
    console.log("❌¡ERROR!, Vuelve a ingresar tu calificación, debe ser mayor a 1 y menor que 10)")
}

// NUEVE
console.log("--------------EJERCICIO 9------------")

console.log("BIENVENIDO a heladería Jarbis");
console.log("El precio del helado es de: $50 MXN")
console.log("el helado puede llevar uno de los diferentes toppings, los cuales son:")
console.log("Topping de oreo: $10 MXN")
console.log("Topping de Kitkat: $15 MXN")
console.log("Topping de Brownie: $20 MXN")

let topping = prompt("¿cuál topping deseas agregar: oreo, kitkat o brownie? (Si no deseas ninguno poner: ninguno)").toLowerCase();

let precio = 50;

if(topping == "oreo"){
    precio = precio + 10;
} else if (topping == "kitkat"){
    precio = precio + 15;
}else if (topping == "brownie"){
    precio= precio + 20;
}else if (topping == "ninguno"){
    precio= precio;
}else{
    console.log ("Lo sentimos, el topping elegido no está disponible por el momento 😔")
}

console.log("El precio del helado es de $" + precio + " MXN")

//DIEZ
console.log("--------------EJERCICIO 10------------")

console.log("BIENVENIDO a TecUniversity ");
console.log("Tenemos diferentes programas para el desarrollo de aplicaciones")
console.log("El programa educativo tiene 3 diferentes niveles: Course (2 meses), Carrera (6 meses) o Master (12 meses)")

let programa = prompt ("¿cual programa educativo desea: Course, Carrera o Master?").toLowerCase();

let costo = 0.0;

if(programa == "course"){
    costo = 4999;
} else if(programa == "carrera"){
    costo = 3999;
} else if(programa == "master"){
    costo = 2999;
} else{
    console.log ("Lo sentimos, actualmente no tenemos el programa que desea")
}

let beca = prompt ("Cuenta con algun beca? indicar cuál: Facebook, Google o Jesua").toLowerCase();

if(beca == "facebook"){
        costo *= 0.8;
}else if (beca == "google"){
        costo *= 0.85;
}else if(beca == "jesua"){
        costo *= 0.5;
}else{
    costo == costo;
}

let CostoTotal= costo;

if(programa == "course"){
    CostoTotal *= 2;
} else if(programa == "carrera"){
    CostoTotal *= 6;
} else if(programa == "master"){
    CostoTotal *= 12;
} else{
    CostoTotal == CostoTotal;
}

console.log("El programa educativo " + programa + " cuesta mensualmente con descuento $" + costo);
console.log("El programa educativo " + programa + " cuesta en total con descuento $" + CostoTotal);

//ONCE

console.log("--------------EJERCICIO 11------------")

console.log("Calculo del total a pagar de acuerdo a la distancia recorrida por vehiculo")

let vehiculo = prompt("¿Que vehiculo es: coche, moto o autobus?" ).toLowerCase();
let distancia = Number (prompt("¿Cuál fue la distancia recorrida en km?"));
let pago= 0.0;

if (vehiculo=="coche"){
    pago = distancia * 0.20;

} else if (vehiculo == "moto"){
    pago = distancia * 0.10;

} else if (vehiculo == "autobus"){
    pago = distancia * 0.5;
} else{
    console.log("lo siento, el vehiculo ingresado no lo tenemos disponible")
}

let litro = Number (prompt("¿cuantos litros consumiste?"));

if (litro >= 0 && litro <= 100){
    pago = pago + 5;
}else {
    pago = pago + 10;
}
console.log("El total a pagar es $" + pago + " por usar " + vehiculo)