//holaaaaaaaaaa esto es un comentario
console.log("Hello World"); //escribir en la consola

//tipos de datos

//let | nombre de la variable | : | tipo de dato | = | valor de la variable
let edad: number = 12;
let apPaterno: string = "Romainville";
let fecha: string = "2024-25-26";
let salva: boolean = false;
let resultado: null = null;
let noDefeinido: undefined;
let numerosGrandes: BigInt = 891729872190729878n;
let idUnico: symbol = Symbol("id");
//exclusivos de Typescript
let comodin: any = "texto plano";
comodin = 32;
comodin = true;
let dato: unknown = "mesaje";
let vacio: void;

// variable y constantes 
//variables
let telefono = "sansung";
telefono = "xiaomi"; //se puede reacignar el valor, pero no se puede el tipo de dato


//constantes no se pueden modificar
const pi = 3.1416;

//ADVERTENCIA
var prohibido = "NO USAR";

//simbolos de operacion
let nombreCompleto = "juan" + " " + "perez";
let a = 2;
let b = 4;
let suma = a + b; // suma
let resta = a - b; // resta
let multiplicacion = a * b; // multiplicacion
let division = a / b; // division
let modulo = a % b; // modulo
let exponencial = a ** b; // exponencial o potencia
//console.log(suma);

//simbolos de comparacion (son booleanos)
let comparacion = a == b; // igual que
let comparacion1 = a != b; // diferente que
let comparacion2 = a > b; // mayor que
let comparacion3 = a < b; // menor que
let comparacion4 = a >= b; // mayor o igual que
let comparacion5 = a <= b; // menor o igual que

//simbolos de autoasignacion 
let ramdomNumber = 2;
ramdomNumber++; // ramdomNumber = ramdomNumber + 1;
ramdomNumber--; // ramdomNumber = ramdomNumber - 1;
ramdomNumber += 5; // ramdomNumber = ramdomNumber + 5;
ramdomNumber -= 5; // ramdomNumber = ramdomNumber - 5;
ramdomNumber *= 5; // ramdomNumber = ramdomNumber * 5;
ramdomNumber /= 5; // ramdomNumber = ramdomNumber / 5;
ramdomNumber %= 5; // ramdomNumber = ramdomNumber % 5;

//operadores logicos
let comparacioon1 = a == b && a < 4; // AND
let comparacioon2 = a == b || a < 4; // OR
let comparacioon3 = !(a == b); // NEGACION


//---------------------------ejercicio-----------------------------//

let estudiante = "esdras blanco";
let nota1 = 90;
let nota2 = 85;
let nota3 = 95;
let promedio = (nota1 + nota2 + nota3) / 3;

console.log(
    "El promedio de " + estudiante + " es " + promedio
);

/* mi amigo Pepe tiene un talle automotriz y un parqueo de vehiculos el cobra * hora 20$ 
el quiere saber cuanto deberia cobrar a un vehiculo que se estacione en su parqueo por N horas */

let horas: number = 4;
let precioHora: number = 20;
let total: number = horas * precioHora;

console.log(
    "usted estuvo " + horas + " horas en el parqueo el total a cobrar es de " + total
);