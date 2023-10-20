document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
    // capturamos as informações preencinda e guardamos em variáveis
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var datanacimento = document.getElementById("datadenacimento").value;
    var whtsapp = document.getElementById("whtsapp").value;

    var mensagem =  "Cadastro Realiazdo com sucesso!\n\n";
     mensagem +=  "Nome: " +nome+ "\n";
     mensagem +=  "Sobrenome: " +sobrenome+ "\n";
     mensagem +=  "Data nacimento: " +datanacimento+ "\n";
     mensagem +=  "Whtsapp: " +whtsapp+ "\n";
    alert(mensagem)



});