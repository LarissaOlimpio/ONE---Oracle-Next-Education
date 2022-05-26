var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
    /*para exemplificar melhor:
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove(); */

})