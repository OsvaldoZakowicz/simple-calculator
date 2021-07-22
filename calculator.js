/**
 * *Obtengo el display de la calculadora.
 * donde mostrare las operaciones
 */
const display = document.getElementById('display');

/**
 * *Inserto caracteres en el display
 * @param {*} caract
 * @returns 
 */
const insertCaract = (caract) => display.textContent += caract;

/**
 * *Borro caracteres del display, uno a la vez
 * @returns
 */
const deleteCaract = () => display.textContent = display.textContent.substring(0, display.textContent.length-1);

/**
 * *Borro todos los caracteres del display
 * @returns
 */
const clearDisplay = () => display.textContent = "";