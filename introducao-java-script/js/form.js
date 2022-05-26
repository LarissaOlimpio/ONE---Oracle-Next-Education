var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); /*captando o formulario*/

    var paciente =  obtemPacienteDoFormulario(form);/*pegando os itens de dentro do formulario*/


    var pacienteTr = montaTr(paciente); /* recebe a função que cria a linha e chama a função que cria as células */ 

    /*validando se a string erro contem a mensagem o peso é invalido e passando para a tag span a frase de inválido ou vazio se for válido*/
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0 ){
        exibeMensagemDeErro(erros);

        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();/*limpando formulario*/
    var mensagemDeErro = document.querySelector("#mensagens-erro");
    mensagemDeErro.innerHTML = "";
});
function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li  = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montaTr(paciente){/* cria as linhas (tr) e chama a função de criar células(td) ja colocando como filho das linhas da tabela*/
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}
function montaTd(dado, classe){/* criando as células da tabela */
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validaPaciente(paciente){

    var erros = [];
    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    /*if simples não necessita dos colchetes*/
    if(!validaPeso(paciente.peso))erros.push("Peso é inválido");
    
    if (!validaAltura(paciente.altura))erros.push("Altura é inválida");
    
    if (paciente.gordura.length == 0 ){
        erros.push("A gordura não pode ser em branco");
    }
    if (paciente.peso.length ==0){
        erros.push("O peso não pode ser em branco");
    }
    if (paciente.altura.length ==0){
        erros.push("A altura não pode ser em branco");
    }
    return erros;
}