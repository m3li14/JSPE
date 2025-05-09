let item1;
let item2;
let item3;

function calculateItems() {

	item1 = parseFloat(document.getElementById('grocery1').value);
	item2 = parseFloat(document.getElementById('grocery2').value);
	item3 = parseFloat(document.getElementById('grocery3').value);

	let Total = parseFloat(item1 + item2 + item3).toFixed(2);

	document.getElementById('TotalCost').innerText = `The total amout is $${Total}`;

}