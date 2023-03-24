//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10;
let i = 1;
let resultado = 1;



while ( i <= num){
    console.log(resultado*= i);
    if(num === 0 || num === 1){
        console.log(resultado);
    } else if(num < 0){
        break;
    }
    i++
}