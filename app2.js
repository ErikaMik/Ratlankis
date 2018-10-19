document.getElementById("btn_count").addEventListener("click", count);
document.getElementById("btn_empty").addEventListener("click", empty);


function count() {
	var p = document.getElementById('padanga').value;
	var r = document.getElementById('ratlankis').value;
	var a = document.getElementById('arka').value;
	var rez = document.getElementById('result');

	if (isNaN(p) || isNaN(r) || isNaN(a)) {
		alert('Įvedėte ne skaičių!');
	}

	var p_convert = p / 10;
	var r_convert = Math.ceil(r / 0.39370);
	
	if ((2 * a) > (2 * p_convert + r_convert)) {
		rez.innerHTML = 'Ratas tinkamas';
		rez.style.color = '#BAF171';
	} else {
		rez.innerHTML = 'Ratas netinkamas';
		rez.style.color = '#ff9966';
	}

	console.log(p_convert); // see value in cm in console
	console.log(r_convert); // see value in cm in console
}


// Clear the input/output fields
function empty() {
	result.innerHTML = 'Įveskite parametrus';
	result.style.color = '#b1b2ab';
	padanga.value = '';
	ratlankis.value = '';
	arka.value = '';
}

