//let colores = ["Rojo", "Verde", "Azul"];
//console.log(colores[2]);

//var frutas = new Array();
//frutas[0]="Sandia";
//console.log(frutas[0]);



/*var numero = new Array(10);
numero[0] = "";
numero[1] = "";
numero[2] = "";
numero[3] = "*";
numero[4] = "*";
numero[5] = "*";
numero[6] = "*";
numero[7] = "";
numero[8] = "";
numero[9] = "";*/

//console.log(numero[4]);
//onsole.log(numero.length);

//let t = numero.length;

//for (let i = 0; i < t; i++){
// console.log(numero[i]);
//}




//Una matriz de 10 x 10 espacios.

/*var matrizFila = new Array();

for (let x = 0; x <= 9; x++) {
     matrizFila[x] = new Array();
    for (let y = 0; y <= 9; y++) { 
        matrizFila [x][y] = x + "" + y;
    }
}
for (let elemento in matrizFila) { console.log(elemento + "=" + matrizFila [elemento]);
}*/


// Función para crear la matriz de 10x10
// Función para crear la matriz de 10x10 con asteriscos
/*function crearMatriz() {
    var matriz = [];
    for (var i = 0; i < 10; i++) {
      var fila = [];
      for (var j = 0; j < 10; j++) {
        fila.push("*");
      }
      matriz.push(fila);
    }
    console.log (matriz);
  }
  
  // Función para imprimir la matriz
  function imprimirMatriz(matriz) {
    for (var i = 0; i < matriz.length; i++) {
      var fila = matriz[i].join(" ");
      console.log(fila);
    }
  }
  
  // Crear y mostrar la matriz
  var matriz = crearMatriz();
  imprimirMatriz(matriz);*/

// Función para crear la matriz de 10x10 con la letra "S"
/*function crearMatriz() {
    var matriz = [];
    for (var i = 0; i < 10; i++) {
      var fila = [];
      for (var j = 0; j < 10; j++) {
        // Verificar si estamos en las posiciones para formar la "S"
        if (
          (i === 0 && j >= 1 && j <= 8) || // Parte superior de la "S"
          (i >= 1 && i <= 4 && j === 0) ||   // Travesía vertical de la "S"
          (i === 5 && j >= 1 && j <= 8) ||  // Parte inferior de la "S"
          (i === 6 && j === 9)  ||
          (i === 7 && j === 9)  ||
          (i === 8 && j === 9)  ||             // Esquina inferior derecha en blanco
          (i === 9 && j === 8)  ||           // Esquina inferior derecha en blanco
          (i === 9 && j >= 1 && j <= 8) ||   
          (i === 8 && j === 0)||  
          (i === 1 && j === 9)
        ) {
          fila.push("*");
        } else {
          fila.push(" "); // Espacio en blanco en otras posiciones
        }
      }
      matriz.push(fila);
    }
    console.log (matriz);
  }
  
  // Función para imprimir la matriz
  function imprimirMatriz(matriz) {
    for (var i = 0; i < matriz.length; i++) {
      var fila = matriz[i].join(" ");
      console.log(fila);
    }
  }
  
  // Crear y mostrar la matriz
  var matriz = crearMatriz();
  imprimirMatriz(matriz);*/


function crearMatriz() {
    var matriz = [];
    for (var i = 0; i < 10; i++) {
        var fila = [];
        for (var j = 0; j < 10; j++) {
            if (
                (i === 1 && j === 9) ||            //1º punto 
                (i === 0 && j >= 1 && j <= 8) ||   // Parte superior de la "S"
                (i >= 1 && i <= 4 && j === 0) ||   // Travesía vertical izq de la "S"
                (i === 5 && j >= 1 && j <= 8) ||   // Parte media de la "S"
                (i >= 6 && i <= 8 && j === 9) ||   // Travesía vertical der de la "S"
                (i === 9 && j >= 1 && j <= 8) ||   // Parte inferior de la "S"
                (i === 8 && j === 0)               // ultimo punto 

            ) {
                fila.push("*");
            } else {
                fila.push(" "); // Espacio en blanco en otras posiciones
            }
        }
        matriz.push(fila);
    }
    console.log(matriz);
}

// Función para imprimir la matriz sin comas ni comillas
function imprimirMatriz(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        var fila = matriz[i].join(" ");
        console.log(fila.replace(/,/g, "").replace(/'/g, ""));
    }
}


// Crear y mostrar la matriz
var matriz = crearMatriz();
imprimirMatriz(matriz);