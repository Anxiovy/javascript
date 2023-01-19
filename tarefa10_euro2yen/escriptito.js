/*var numerito;
numerito = 0;
while (numerito <=10){
	document.write(numerito + ' ->');
	numerito++;
}*/

/*document.write('<h3> ☞ Preparar bocata </h3>');
var comida;
comida = 'Pan con:';
while (comida != 'nada') {
	document.write(comida + ' ');
	comida  = prompt('Que vos apetece comer con pan?');
}*/

/*var conto = "Quieres que te cuente el cuento de la buena pipa?"
var resposta;
resposta = true;
while (resposta == true) {
	document.write( conto );
	resposta  = confirm(conto);
}*/

var inicio = true

while (inicio == true) {

	var puno = prompt("inserte el nombre del producto que quieres comprar");
	var cpro = prompt("inserte el precio del producto");
	var pagamiento = prompt("¿en que moneda lo vas a pagar? yenes o euros");

	switch (pagamiento) {
		case "euros":
			var pyen = cpro * 139.09
			document.write("<p>" + puno + "</p>");
			document.write("<p>" + cpro + " euros</p>");
			document.write("<p>" + pyen + " yenes</p><hr>");
			inicio = confirm("¿vas a comprar algo más?");
			break;
		case "yenes":
			var puero = cpro / 139.09
			document.write("<p>" + puno + "</p>");
			document.write("<p>" + cpro + " yenes</p>");
			document.write("<p>" + puero + " euros</p><hr>");
			inicio = confirm("¿vas a comprar algo más?");
			break;

		default:
			inicio = confirm("ERROR: No introduciste un formato de moneda válido")
			break;
	}

}
/*if (pagamiento = "euros") {

var numerito= parseFloat(cpro);
var ovos= numerito*139.09;

document.write(puno)
document.write("<p>" + cpro + " euros </p>");
document.write("<p>" + ovos.toFixed(2) + "yenes </p>");
} else 
{if (pagamiento = "yenes") {
	var numerito= parseFloat(cpro);
	var ovos= numerito/139.09;

document.write(puno)
document.write("<p>" + cpro + "yenes </p>");
document.write(ovos.tofixed(2) + "euros");
} else {
	cpro;
}
}*/

/*var respuesta = true;

while (respuesta == true) {

 document.write(puno);
document.write(cpro);}

function (a, b) ¨{


}*/