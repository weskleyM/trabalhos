/*document.querySelector("#somar").addEventListener('click', function() {
 var som1 = document.querySelector("#numero1").value;
 var som2 = document.querySelector("#numero2").value;
 var soma = parseInt(som1) + parseInt(som2);
 document.querySelector("#resultado").value =  soma;
 });
 document.querySelector("#subtrair").addEventListener('click', function() {
 var sub1 = document.querySelector("#numero1").value;
 var sub2 = document.querySelector("#numero2").value;
 var subt = parseInt(sub1) - parseInt(sub2);
 document.querySelector("#resultado").value =  subt;
 });
 document.querySelector("#multiplicar").addEventListener('click', function() {
 var mult1 = document.querySelector("#numero1").value;
 var mult2 = document.querySelector("#numero2").value;
 var mult = parseInt(mult1) * parseInt(mult2);
 document.querySelector("#resultado").value =  mult;
 });
 document.querySelector("#dividir").addEventListener('click', function() {
 var div1 = document.querySelector("#numero1").value;
 var div2 = document.querySelector("#numero2").value;
 var div = parseInt(div1) / parseInt(div2);
 document.querySelector("#resultado").value =  div;
 });*/



function calc(tipo) {
    var num1 = document.querySelector("#numero1").value;
    var num2 = document.querySelector("#numero2").value;

    switch (tipo) {
        case 1:
            result = parseInt(num1) + parseInt(num2);
            break;
        case 2:
            result = parseInt(num1) - parseInt(num2);
            break;
        case 3:
            result = parseInt(num1) * parseInt(num2);
            break;
        case 4:
            result = parseInt(num1) / parseInt(num2);
            break;
    }

    document.querySelector("#resultado").value = result;
}
