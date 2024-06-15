// Função para gerar o prompt
function generate() {

    var prompt = document.getElementById("prompt")

    var papel = document.getElementById("papel").value
    var acao = document.getElementById("acao").value
    var contexto = document.getElementById("contexto").value
    var intencao = document.getElementById("intencao").value
    var formato = document.getElementById("formato").value


    let response =
        "Olá. Sou um " + papel +
        ". Preciso criar " + acao +
        ". Levando-se em consideração o contexto de que " + contexto +
        ". Crie para mim " + intencao +
        ". Me entregue a resposta no seguinte formato: " + formato

    // prompt.value = "sdsds"
    // prompt.innerHTML = "sdsds"
    // document.getElementById('prompt').innerText = "teste";

    try {
        prompt.innerText = response
    } catch (err) {
        console.log('Oops, unable to generate');
    } finally {
        // alert("Prompt Gerado com Sucesso")
    } 

}


// Função para copiar o prompt gerado para a area de transferência
function copy() {
    var promptTextArea = document.getElementById("prompt")
    promptText = promptTextArea.innerHTML
    console.log(promptText)

    promptTextArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
        window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", promptText);
    }

    // alert("Copiado")
}


// Função para imprimir a página da web 
function imprimir() {
    print()
}