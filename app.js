// console.log("application started");

// var number = document.getElementById('number');

// function up() {
// 	var value = number.innerHTML;
// 	value++;
// 	number.innerHTML = value;
// }

console.log('Calculator start');

var input_a = document.getElementById('number_a');
var input_b = document.getElementById('number_b');
var result = document.getElementById('result');

var btn_sum = document.getElementById('btn_sum');
var btn_empty = document.getElementById('btn_empty');



btn_sum.addEventListener('click', sum);
btn_empty.addEventListener('click', empty);

// input_a.addEventListener('keyup', sum);

var results = [];

function sum() {
	var a = parseInt(input_a.value); //parseInt funkcija grazina skaiciu
	var b = parseInt(input_b.value);

		if (a > 100 || b > 100) {
			alert("Number A or B is more then 100");
			input_a.style.color = 'red';
			input_b.style.color = 'red';
		} else {
			var sum = a + b;
			var eur = convert_to_eur(sum);
			console.log(sum);
			result.innerHTML = sum + '<br><small>(EUR: ' + eur + ")</small>";
			input_a.style.color = 'black';
			input_b.style.color = 'black';

			// results.push(sum);
			store(sum);
			console.log(results);
		}
}

function empty() {
	result.innerHTML = 'X';
	input_a.value = '';
	input_b.value = '';

}

function convert_to_eur(amount) {

	var result = amount / 3.4528;

	result = Math.round(result);

	if (amount < 100) {
		result--;
	}

	return result; // grazinam reiksme i ta vieta is kur iskvieciama
}

// function div() {
// 	var a = parseInt(input_a.value); //parseInt funkcija grazina skaiciu
// 	var b = parseInt(input_b.value);

// 	if (a > 100 || b > 100) {
// 			alert("Number A or B is more then 100");
// 			input_a.style.color = 'red';
// 			input_b.style.color = 'red';
// 		} else {
// 			var div = a / b;
// 			console.log(div);
// 			result.innerHTML = div;
// 			input_a.style.color = 'black';
// 			input_b.style.color = 'black';
// 		}

function store(current_result) {
	
	results.push(current_result);
	console.log(results);

	var history = document.getElementById('history');
	history.innerHTML = results.join(', ');
}