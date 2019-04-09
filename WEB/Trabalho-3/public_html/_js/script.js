function mudaLogos(logo) {
    document.querySelector("#logo").src = logo;
}
//PRE-FORMATA NUMERO DE TELEFONE
$(document).ready(function() {
    $("#tele").mask("(00) 00000-0000");
});
//ESCONDER PARTE DO CARDAPIO
$(document).ready(function() {
    $("#produtos-ext").hide("slow");
});
//MOSTRA PARTE DO CARDAPIO AO CLICAR NO BOTÂO
$(document).ready(function() {
    $("#mostrar").click(function() {
        $("#produtos-ext").show("slow");
    });
});
//WIDGET OPCIONAL
$(function() {
    $("#msg").dialog();
});