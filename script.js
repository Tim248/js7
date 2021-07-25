let amountOfTasks = +prompt('Введите кол-во решаемых примеров: ')

function random() {
    return Math.floor(Math.random() * 100);
}

function randomSymbol() {
    let symbols = new Array ('+', '-', '*', '/');
    return symbols[Math.floor(Math.random() * symbols.length)]
}

for(let i = 0; i < amountOfTasks; i++) {
    let num1 = random();
    let num2 = random();
    let symbol = randomSymbol();
    let primer = +prompt( num1 + ' ' + symbol + ' ' + num2 + ' =' );
    let answer = (num1 + num2) == primer ? 'Ваш ответ верный -> ' + primer : 'Ваш ответ не верный -> ' + primer + ' | Правильный ответ -> ' + (num1 + num2)
    alert(answer)
}



