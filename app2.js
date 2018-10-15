document.getElementById("btn_count").addEventListener("click", count);
document.getElementById("btn_empty").addEventListener("click", empty);





function count() {
	var p = document.getElementById('padanga').value;
	var r = document.getElementById('ratlankis').value;
	var a = document.getElementById('arka').value;

	var p_convert = p / 10;
	var r_convert = Math.ceil(r / 0.39370);
	// var a_convert = a / 10;

// var a = parseInt(p.value);

console.log(p_convert);
console.log(r_convert);
console.log(a);
// console.log(r_convert);
// console.log(a_convert);
	// if {

	// }
}




function empty() {
	result.innerHTML = 'Įveskite parametrus';
	padanga.value = '';
	ratlankis.value = '';
	arka.value = '';
}