// ---- 1. Отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number) {
    const arr = String(number).split('').map((item) => parseInt(item, 10));
    return Math.max(...arr);
  }

  let findMaxNum = document.getElementById('findMaxNum');
  findMaxNum.onclick = function(){ 
  alert(getMaxDigit(+prompt('Введіть число')));
  }

//----- 2. Визначає ступінь числа.

function powerOfANumber(num, exponent) {
    let result = 1;
    if (exponent >= 0){
    for (i = 0; i < exponent; i++) {
    result *= num; }
    } else {
        for (i = exponent; i < 0; i++) {
            result /= num
        }
    }
        return result
}

let findPowerOfANumber = document.getElementById('findPowerOfANumber');
findPowerOfANumber.onclick = function(){
   alert(powerOfANumber(prompt('Введіть число, яке хочете піднести до степеня'), prompt('Введіть степінь')));
}

//----- 3. Форматує ім'я, роблячи першу букву великою.

function firstLetterUp(value) {
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
}

let makeFirstLetterUp = document.getElementById('makeFirstLetterUp');
makeFirstLetterUp.onclick = function(){
    alert(firstLetterUp(prompt(`Введіть ім'я`)));
}

//----- 4. Вираховує суму, що залишається після оплати податку від зарабітньої плати

function salaryWithTax(cash){
let result = (cash - cash * (19.5 / 100)).toFixed(2);
return result;
}

let defineSalaryWithTax = document.getElementById('defineSalaryWithTax');
defineSalaryWithTax.onclick = function(){
    alert(salaryWithTax(+prompt('Введіть суму зарплати без врахування податку')));
}

//----- 5. Повертає випадкове ціле число в діапазоні від N до M.

function randomValue(min, max) {
    return Math.ceil(Math.randomValue() * (max - min) + min);
}

let findRandomValue = document.getElementById('findRandomValue');
findRandomValue.onclick = function(){
    alert(randomValue(+prompt('Введіть число N'), +prompt('Введіть число M')));
}

//----- 6. Рахує скільки разів певна буква повторюється в слові.

function regSum(str,lett){
    const arr = str.toLowerCase().split("");
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === lett.toLowerCase()) {
          value += 1;
            }
        }
    return value;
}

let countsLetterRepetitions = document.getElementById('countsLetterRepetitions');
countsLetterRepetitions.onclick = function(){
    alert(regSum(prompt('Введіть слово'), prompt('Введіть букву')));
}

//----- 11. Видаляє всі букви з речення.

function deleteLetter(str, lett) {

    for (let i = 0; i < str.length; i++) {
        str = str.replace(lett, '');
    }
    return str;
}

let deletesLetter = document.getElementById('deletesLetter');
deletesLetter.onclick = function(){
    alert(deleteLetter(prompt('Введіть речення'), prompt('Введіть букву, яку хочете видалити')));
}
       
//----- 12. Створіть функцію, яка перевіряє, чи є слово паліндромом.

function isPalyndrom(str) {
    str = str.toLowerCase();
    return str == str.split('').reverse('').join('');
}

let findPalyndrom = document.getElementById('findPalyndrom');
findPalyndrom.onclick = function () {
    alert(isPalyndrom(prompt('Введіть слово для перевірки')));
}

//----- 13. Видалить з речення букви, які зустрічаються більше 1 разу.

function removeDuplicate(str)  {
    let string = str.toLowerCase();
    for (element of string) {
        const lett = new RegExp(element, 'g');
        if (string.match(lett)?.length > 1) {
            string = string.replace(lett, '');
        }
    }
    return string;
} 

let removesDuplicatesInsentence = document.getElementById('removesDuplicatesInsentence');
removesDuplicatesInsentence.onclick = function(){
    alert(removeDuplicate(prompt('Введіть речення')))
}