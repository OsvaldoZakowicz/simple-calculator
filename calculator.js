/**
 * *Obtengo el display 'operation' de la calculadora.
 *  mostrar la operacion a resolver.
 */
const displayoperation = document.getElementById('operation');

/**
 * *Obtengo el display 'result' de la calculadora
 * mostrar el resultado de la operacion.
 */
const displayresult = document.getElementById('result');

/**
 * *Obtengo botones de numeros
 */
const nueve = document.getElementById('btn-num9');
const ocho = document.getElementById('btn-num8');
const siete = document.getElementById('btn-num7');
const seis = document.getElementById('btn-num6');
const cinco = document.getElementById('btn-num5');
const cuatro = document.getElementById('btn-num4');
const tres = document.getElementById('btn-num3');
const dos = document.getElementById('btn-num2');
const uno = document.getElementById('btn-num1');
const cero = document.getElementById('btn-num0');

/**
 * *Obtengo botones de operaciones
 */
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const product = document.getElementById('product');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const sup = document.getElementById('sup');
const c = document.getElementById('c');
const about = document.getElementById('about');

/**
 * *Inserto caracteres en el display de operacion
 * @param {*} caract
 * @returns 
 */
function insertCaracter(caracter){ 
  displayoperation.textContent += caracter;
};

/**
 * *Inserto el resultado final del calculo en el display de resultado, en String.
 * @param {*} result 
 */
function insertResult(result){
  displayresult.textContent += result.toString();
}

/**
 * *Borro un caracter del display de operaciones, 
 * Haciendo un substring y restando en 1 la longitud por cada
 * @returns
 */
function deleteCaracter(){
  displayoperation.textContent = displayoperation.textContent.substring(0, displayoperation.textContent.length-1);
}

/**
 * *Borro todos los caracteres de ambos display
 * @returns
 */
function clearDisplay(){
  displayoperation.textContent = "";
  displayresult.textContent = "";
}

/**
 * *Eventos
 */
nueve.onclick = (event) => {
  insertCaracter(9)
};

ocho.onclick = (event) => {
  insertCaracter(8)
};

siete.onclick = (event) => {
  insertCaracter(7)
};

seis.onclick = (event) => {
  insertCaracter(6)
};

cinco.onclick = (event) => {
  insertCaracter(5)
};

cuatro.onclick = (event) => {
  insertCaracter(4)
};

tres.onclick = (event) => {
  insertCaracter(3)
};

dos.onclick = (event) => {
  insertCaracter(2)
};

uno.onclick = (event) => {
  insertCaracter(1)
};

cero.onclick = (event) => {
  insertCaracter(0)
};

dot.onclick = (event) => {
  insertCaracter('.')
};

add.onclick = (event) => {
  insertCaracter('+');
};

sub.onclick = (event) => {
  insertCaracter('-');
};

product.onclick = (event) => {
  insertCaracter('*');
};

divide.onclick = (event) => {
  insertCaracter('/');
};

sup.onclick = (event) => {
  deleteCaracter()
};

c.onclick = (event) => {
  clearDisplay();
};

about.onclick = event => { 
  alert("C4LCUL4T0R v0.1, Make with love!!, NOTE: separate operations using the = button, otherwise the result will not be correct. Combined operations not supported yet");
};

/**
 * *Regex valido para operar dos numeros enteros (opcionalmente con .)
 * en las operaciones basicas +,-,*,/
 */
let validOperationFormat = /^[0-9]+(\.[0-9]{1,5})?[+|\-|*|/]{1}[0-9]+(\.[0-9]{1,5})?$/;

/**
 * *Evalua la operacion ingresada comparandola con el 
 * formato valido del regex
 * @returns validation
 */
function evaluateExpresion() {
  const expresion = displayoperation.textContent;
  const validation = expresion.match(validOperationFormat);
  return validation;
};

function calculate(expresion) {
  if (expresion.includes('+')) {
    //suma
    const toOperate = processOperation(expresion,'+');
    return toOperate[0]+toOperate[1];
  } else if(expresion.includes('-')) {
    //resta
    const toOperate = processOperation(expresion,'-');
    return toOperate[0]-toOperate[1];
  } else if(expresion.includes('*')) {
    //multiplicacion
    const toOperate = processOperation(expresion,'*');
    return toOperate[0]*toOperate[1];
  } else if(expresion.includes('/')) {
    //division
    const toOperate = processOperation(expresion,'/');
    if(toOperate[1] === 0) {
      return indicateSintaxError();
    } else {
      return toOperate[0]/toOperate[1];
    }
  };
};

/**
 * * Procesar una operacion, extraer el operador y convertir
 * a un array de dos operandos numericos
 * @param {*} expresion 
 * @param {*} operator 
 * @returns 
 */
function processOperation(expresion, operator) {
  return expresion.split(operator).map((expr) => parseFloat(expr));
};

/**
 * *Indicar error de sintaxis cuando falla la validacion
 * de la operacion
 */
function indicateSintaxError() {
  displayresult.textContent += 'SYNTAX ERROR, press C';
};

equal.onclick = (event) => {
  if (evaluateExpresion()) {
    //obtengo la expresion del display
    const expresion = displayoperation.textContent;
    //calculo la expresion
    const result = calculate(expresion);
    //muestro el resultado
    displayresult.textContent += result;
  } else {
    indicateSintaxError();
  }
  // TODO: identificar numeros negativos
  // TODO: si es un solo numero, retornar
  // TODO: operar numeros negativos
}