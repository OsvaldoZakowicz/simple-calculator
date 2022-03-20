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
 * *Obtengo el display 'memory-slot' de la calculadora
 * mostrar la memoria
 */
const displaymemory = document.getElementById('memory');

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
const negative = document.getElementById('negative');
const memoryset = document.getElementById('m-set');
const memoryget = document.getElementById('m-get');
const memorydel = document.getElementById('m-del');

/**
 * *Inserto caracteres en el display de operacion
 * @param {*} caract
 * @returns 
 */
function insertCaracter(caracter){ 
  displayresult.textContent += caracter;
};

/**
 * *Inserto el resultado final del calculo en el display de resultado, en String.
 * @param {*} result 
 */
function insertResult(result){
  let resultFormated = result;
  //si el resultado a mostrar es negativo ('-') adaptar a string con ('¬')
  if(result.toString().includes('-')) {
    resultFormated = resultFormated.toString().replace('-','¬');
  } else {
    resultFormated = resultFormated.toString();
  }
  displayoperation.textContent = '';
  displayoperation.textContent += displayresult.textContent + ' = ' + resultFormated;
  displayresult.textContent = '';
  displayresult.textContent += resultFormated;
}

/**
 * *Borro un caracter del display de operaciones, 
 * Haciendo un substring y restando en 1 la longitud por cada
 * @returns
 */
function deleteCaracter(){
  displayresult.textContent = displayresult.textContent.substring(0, displayresult.textContent.length-1);
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

negative.onclick = event => { 
  insertCaracter('¬');
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

/**
 * *Regex valido para operar dos numeros enteros (opcionalmente con .)
 * en las operaciones basicas +,-,*,/
 * identificar con numeros negativos opcionales (¬n) y positivos
 * de la forma (¬¬n) = n
 */
let validOperationFormat = /^[¬]{0,2}[0-9]+(\.[0-9]+)?[+|\-|*|/]{1}[¬]{0,2}[0-9]+(\.[0-9]+)?$/;
//let validOperationFormat = /^[0-9]+(\.[0-9]{1,5})?[+|\-|*|/]{1}[0-9]+(\.[0-9]{1,5})?$/;

//identificar numeros negativos (¬n)
let negativeNumber = /^[¬]{1}[0-9]+(\.[0-9]+)?$/;

//identificar numeros positivos con la forma (¬¬n)
let negativePositiveNumber = /^[¬]{2}[0-9]+(\.[0-9]+)?$/;

//identificar numeros positivos (n)
let positiveNumber = /^[0-9]+(\.[0-9]+)?$/;


/**
 * *Evalua la operacion ingresada comparandola con el 
 * formato valido del regex
 * @param {*} expresion
 * @param {*} regex
 * @returns validation
 */
function evaluateExpresion(expresion, regex) {
  const validation = expresion.match(regex);
  return validation;
};

/**
 * * Calcular la expresion especificada
 * @param {*} expresion 
 * @returns result
 */
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
      throw new Error('MATH ERROR');
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

  //tiene numeros negativos, al menos uno de ellos?
  if(expresion.includes('¬')) {
    
    return expresion.split(operator).map((exp) => {
      //numero negativo (¬n)
      if(exp.match(negativeNumber)) {
        return parseFloat(exp.replace('¬','-'));
      }
      //numero positivo de la forma (¬¬n)
      if(exp.match(negativePositiveNumber)) {
        return parseFloat(exp.slice(2, exp.length));
      }
      //numero positivo
      return parseFloat(exp);

    });

  } else {
    //no tiene numeros negativos, tratar todos como positivos
    return expresion.split(operator).map((expr) => parseFloat(expr));
  }

};

/**
 * *Redondear el resultado a no mas de 8 decimales
 * si el resultado no es entero
 * @param {*} result 
 * @returns 
 */
function resultFormat(result) {
  //si el resultado es entero, retornar
  //si el resultado es float, ajustar decimales
  if(Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(8);
  }
}

/**
 * *Indicar error de sintaxis cuando falla la validacion
 * de la operacion
 */
function indicateError(msg) {
  displayresult.textContent = '';
  displayresult.textContent += msg + ' press C.';
};

equal.onclick = (event) => {

  //obtengo la expresion del display
  const expresion = displayresult.textContent;
  //verificar validez de la expresion y operar si es posible
  try {

    if(evaluateExpresion(expresion, negativeNumber)) {
      //si es un numero negativo (¬n) solamente
      const result = parseFloat(expresion.replace('¬','-'));
      insertResult(resultFormat(result));
  
    } else if (evaluateExpresion(expresion, negativePositiveNumber)) {
      //si es un numero positivo de la forma (¬¬n) solamente
      const result = parseFloat(expresion.slice(2, expresion.length));
      insertResult(resultFormat(result));
  
    } else if(evaluateExpresion(expresion, positiveNumber)) {
      //si es un numero positivo (n)
      const result = parseFloat(expresion);
      insertResult(resultFormat(result));
  
    } else if (evaluateExpresion(expresion, validOperationFormat)) {

      //ante una operacion valida, solo hay un error al dividir entre cero
      try {
        //si es una expresion de operacion
        //NOTA: error al dividir entre cero, genera un error
        const result = calculate(expresion);
        //si hay division por cero, resultara en undefined
        insertResult(resultFormat(result)); 
      } catch (error) {
        indicateError(error.message);
      }
    } else {
      throw new Error('SINTAX ERROR');
    };

  } catch (error) {
    indicateError(error.message);
  }
}

/**
 * *Memory management
 * [expresion(string),resultado(string)], 
 * ejemplo ['2+3 = 5',5]
 */
const memoryCalc = [];

/**
 * *Guardar una operacion en memoria
 * @param {*} operation 
 * @param {*} result 
 */
function setMemory(operation, result) {
  if (memoryCalc.length === 0) {

    memoryCalc.push(operation);
    memoryCalc.push(result);
  } else {
    deleteMemory();
    memoryCalc.push(operation);
    memoryCalc.push(result);
  }
  
};

/**
 * *Retornar un resultado de memoria
 * @returns memory
 */
function getMemory() {
  return memoryCalc[1];
};

/**
 * *Vaciar la memoria
 */
function deleteMemory() {
  memoryCalc.pop();
  memoryCalc.pop();
}

memoryset.onclick = (event) => {
  const operationToSave = displayoperation.textContent;
  const resultToSave = displayresult.textContent;
  if(operationToSave.length !== 0) {
    displaymemory.textContent = operationToSave;
    setMemory(operationToSave, resultToSave);
  }
};

memoryget.onclick = (event) => {
  if (memoryCalc.length !== 0) {
    console.log('retornando memoria');
    displayresult.textContent += getMemory();
  }
};

memorydel.onclick = (event) => {
  deleteMemory();
  displaymemory.textContent = '';
};