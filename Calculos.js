let	numeros = [2,8,9,7,5,6];

/**Devuelve la suma de dos numeros.
 * 
 * @param num1 primer valor
 * @param num2 segundo valor
 */
function sumas(num1, num2){
	let total= num1 + num2
	return total
} 


/**
 * Devuelve el resultado de la  division de dos numeros.
 * @param num1 numero a dividir. 
 * @param num2 numero divisor.
 */
function division (num1, num2){
	let total = num1 / num2
	return total
}

/**
 * Devuelve el valor mas alto de un array.
 * @param array Array a evaluar 
 * @returns 
 */
function encontrarMayor(array) {
	if (array.length === 0) {
	  return undefined;  // Verificamos que el array no esté  vacio, si lo está devuelve undefined.
	}
  
	let mayor = array[0];  // Suponemos que el primer valor es el mas grande y se iguala a MAYOR.
  
	for (let i = 0; i < array.length; i++) {
	  if (array[i] > mayor) {
		mayor = array[i];  // Si el valor de la posición iterada es mas grande que el valor actual mas alto se convierte en el nuevo valor de MAYOR.
	  }
	}
  
	return mayor;
  }
  

console.log('suma: ',sumas(5, 10))
console.log('division1: ',division(20, 2))
console.log( 'division2:', division(20,0))
console.log(encontrarMayor(numeros))
