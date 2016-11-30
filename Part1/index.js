import {Observable} from 'rxjs/Rx';

const display = document.getElementById("display");
var buttons = document.getElementsByTagName("button");

let calc = {value: ""};

const buttonleftpar = acc => ({value: acc.value + "("});
const buttonrightpar = acc => ({value: acc.value + ")"});
const buttonplusminus = acc => ({value: acc.value * -1});
const buttondivide = acc => ({value: acc.value + "/"});
const buttonseven = acc => ({value: acc.value + "7"});
const buttoneight = acc => ({value: acc.value + "8"});
const buttonnine = acc => ({value: acc.value + "9"});
const buttonmutiply = acc => ({value: acc.value + "*"});
const buttonfour = acc => ({value: acc.value + "4"});
const buttonfive = acc => ({value: acc.value + "5"});
const buttonsix = acc => ({value: acc.value + "6"});
const buttonminus = acc => ({value: acc.value + "-"});
const buttonone = acc => ({value: acc.value + "1"});
const buttontwo = acc => ({value: acc.value + "2"});
const buttonthree = acc => ({value: acc.value + "3"});
const buttonplus = acc => ({value: acc.value + "+"});
const buttonzero = acc => ({value: acc.value + "0"});
const buttondot = acc => ({value: acc.value + "."});
const buttonclear = acc => ({value: acc.value = " "});
const buttonequals = acc => ({value: acc.value = eval(display.value)});

const button$ = Observable.merge(
	Observable.fromEvent(buttons[0], 'click').mapTo(buttonleftpar),
	Observable.fromEvent(buttons[1], 'click').mapTo(buttonrightpar),
	Observable.fromEvent(buttons[2], 'click').mapTo(buttonplusminus),
	Observable.fromEvent(buttons[3], 'click').mapTo(buttondivide),
	Observable.fromEvent(buttons[4], 'click').mapTo(buttonseven),
	Observable.fromEvent(buttons[5], 'click').mapTo(buttoneight),
	Observable.fromEvent(buttons[6], 'click').mapTo(buttonnine),
	Observable.fromEvent(buttons[7], 'click').mapTo(buttonmutiply),
	Observable.fromEvent(buttons[8], 'click').mapTo(buttonfour),
	Observable.fromEvent(buttons[9], 'click').mapTo(buttonfive),
	Observable.fromEvent(buttons[10], 'click').mapTo(buttonsix),
	Observable.fromEvent(buttons[11], 'click').mapTo(buttonminus),
	Observable.fromEvent(buttons[12], 'click').mapTo(buttonone),
	Observable.fromEvent(buttons[13], 'click').mapTo(buttontwo),
	Observable.fromEvent(buttons[14], 'click').mapTo(buttonthree),
	Observable.fromEvent(buttons[15], 'click').mapTo(buttonplus),
	Observable.fromEvent(buttons[16], 'click').mapTo(buttonzero),
	Observable.fromEvent(buttons[17], 'click').mapTo(buttondot),
	Observable.fromEvent(buttons[18], 'click').mapTo(buttonclear),
	Observable.fromEvent(buttons[19], 'click').mapTo(buttonequals)
)

button$
    .scan((acc, update) => update(acc), calc)
    .subscribe(calc => {
        display.value = calc.value;
    });

const keyPressed = Observable.fromEvent(document, 'keyup')
    .filter(function(e) {
		const inputString = e.key || e.which;

		if (inputString == 0  || inputString == 1 ||inputString == 2 ||inputString == 3 || inputString == 4   ||inputString == 5   || inputString == 6   || inputString == 7   ||  inputString == 8   || 
        inputString == 9   || inputString == '(' ||inputString == ')' || inputString == '-' ||inputString == '+' ||inputString == '*' ||inputString == '/' ||inputString == '=' ||inputString == 'c' ||
    	inputString == 'C' ||inputString == '.') {
        return inputString
    }
		
});

keyPressed.subscribe(function(e) {
    if(e.key == '='){
        const result = eval(display.value);
        display.value = result;
    }
    else if(e.key == 'C'){
        display.value = '';
    }
    else if(e.key == 'c'){
        diplay.value = '';
    }
    else  {
        display.value += e.key;
    }
   
});