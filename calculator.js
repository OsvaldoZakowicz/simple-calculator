/**
 * *Obtengo el display operation de la calculadora.
 * *Obtengo el display result de la calculadora.
 * donde mostrare las operaciones y resultados
 */
const displayoperation = document.getElementById('operation');
const displayresult = document.getElementById('result');

/**
 * *Obtengo numeros y operaciones 
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

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const product = document.getElementById('product');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const sup = document.getElementById('sup');
const c = document.getElementById('c');
const about = document.getElementById('about');

/**
 * *Inserto caracteres en el display
 * @param {*} caract
 * @returns 
 */
const insertNumber = (number) => displayresult.textContent += number;

const insertOperation = (operation) => displayoperation.textContent += operation;

/**
 * *Eventos
 */
nueve.onclick = (e) => {insertNumber(9)};
ocho.onclick = (e) => {insertNumber(8)};
siete.onclick = (e) => {insertNumber(7)};
seis.onclick = (e) => {insertNumber(6)};
cinco.onclick = (e) => {insertNumber(5)};
cuatro.onclick = (e) => {insertNumber(4)};
tres.onclick = (e) => {insertNumber(3)};
dos.onclick = (e) => {insertNumber(2)};
uno.onclick = (e) => {insertNumber(1)};
cero.onclick = (e) => {insertNumber(0)};
dot.onclick = (e) => {insertNumber('.')};

add.onclick = (e) => {
  const number = parseFloat(displayresult.textContent);
  displayoperation.textContent += displayresult.textContent;
  displayresult.textContent = "";
  insertOperation('+');
  calculate(number, '+');
};

sub.onclick = (e) => {
  const number = parseFloat(displayresult.textContent);
  displayoperation.textContent += displayresult.textContent;
  displayresult.textContent = "";
  insertOperation('-');
  calculate(number, '-');
};

product.onclick = (e) => {
  const number = parseFloat(displayresult.textContent);
  displayoperation.textContent += displayresult.textContent;
  displayresult.textContent = "";
  insertOperation('*');
  calculate(number, '*');
};

divide.onclick = (e) => {
  const number = parseFloat(displayresult.textContent);
  displayoperation.textContent += displayresult.textContent;
  displayresult.textContent = "";
  insertOperation('/');
  calculate(number, '/');
};

equal.onclick = (e) => {
  const lastoperation = displayoperation.textContent.substring(displayoperation.textContent.length-1);
  const number = parseFloat(displayresult.textContent);
  calculate(number, lastoperation);
  console.log(result);
  displayoperation.textContent = "";
  if (isNaN(result)) {
    displayoperation.textContent = "Syntax error! press c"
    displayresult.textContent = "";
  } else {
    displayresult.textContent = result;
  }
  result = 0;
  opcont = 0;
}

sup.onclick = (e) => {deleteCaract()};

c.onclick = (e) => {
  result = 0;
  opcont = 0;
  clearDisplay();
};

about.onclick = e => alert("C4LCUL4T0R v0.1, Make with love!!, NOTE: separate operations using the = button, otherwise the result will not be correct. Combined operations not supported yet");

/**
 * *Borro caracteres del display, uno a la vez
 * @returns
 */
const deleteCaract = () => {
  displayresult.textContent = displayresult.textContent.substring(0, displayresult.textContent.length-1);
}

/**
 * *Borro todos los caracteres del display
 * @returns
 */
const clearDisplay = () => {
  displayoperation.textContent = "";
  displayresult.textContent = "";
}

let result = 0;
let opcont = 0;

const calculate = (number, operation) => {
  switch (operation) {
    case '+':
      if (opcont === 0) {
        result = number;
        opcont++;
        break;
      }
      result = result + parseFloat(number);
      opcont++;
      break;

    case '-':
      if (opcont === 0) {
        result = number;
        opcont++;
        break;
      }
      result = result - parseFloat(number);
      opcont++;
      break;
    
    case '*':
      if (opcont === 0) {
        result = number;
        opcont++;
        break;
      }
      result = result * parseFloat(number);
      opcont++;
      break;
    
    case '/':
      if (opcont === 0) {
        result = number;
        opcont++;
        break;
      }
      result = result / parseFloat(number);
      opcont++;
      break;

    default:
      break;
  }
}