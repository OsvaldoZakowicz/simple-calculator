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
const insertCaract = (caract) => displayoperation.textContent += caract;

/**
 * *Eventos
 */
nueve.onclick = (e) => {insertCaract(9)};
ocho.onclick = (e) => {insertCaract(8)};
siete.onclick = (e) => {insertCaract(7)};
seis.onclick = (e) => {insertCaract(6)};
cinco.onclick = (e) => {insertCaract(5)};
cuatro.onclick = (e) => {insertCaract(4)};
tres.onclick = (e) => {insertCaract(3)};
dos.onclick = (e) => {insertCaract(2)};
uno.onclick = (e) => {insertCaract(1)};
cero.onclick = (e) => {insertCaract(0)};
add.onclick = (e) => {insertCaract('+')};
sub.onclick = (e) => {insertCaract('-')};
product.onclick = (e) => {insertCaract('*')};
divide.onclick = (e) => {insertCaract('/')};
sup.onclick = (e) => {deleteCaract()};
c.onclick = (e) => {clearDisplay()};
about.onclick = e => alert("C4LCUL4T0R v0.1, Make with <3!!");

/**
 * *Borro caracteres del display, uno a la vez
 * @returns
 */
const deleteCaract = () => {
  displayoperation.textContent = displayoperation.textContent.substring(0, displayoperation.textContent.length-1);
}

/**
 * *Borro todos los caracteres del display
 * @returns
 */
const clearDisplay = () => {
  displayoperation.textContent = "";
  displayresult.textContent = "";
}