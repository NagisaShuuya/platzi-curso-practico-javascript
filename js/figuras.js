//Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + 
//     ladoTriangulo2 + "cm, " + 
//     baseTriangulo + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");


function perimetroTriangulo(lado1, lado2, base) {
    // alert(lado1, lado2, base); 
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculos");


//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
//const PI = 3.1415;
const PI = Math.PI;
console.log("Pi es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();

//Aquí interactuamos con html

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo() {
    const lado = document.getElementById("ladoTri");
    const base = document.getElementById("baseTri");
    const value1 = parseInt(lado.value);
    const value2 = parseInt(base.value);

    const perimetro = perimetroTriangulo(value1, value1, value2);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("baseTri");
    const altura = document.getElementById("alturaTri");
    const value1 = base.value;
    const value2 = altura.value;

    const area = areaTriangulo(value1, value2);
    alert(area);
}

//Círculo
function calcularDiametroCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const diametro = input.value * 2;

    const perimetro = perimetroCirculo(diametro);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}


