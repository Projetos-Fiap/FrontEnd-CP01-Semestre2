function validarForm() {
    var nome = document.getElementById("name").value;
    var senha = document.getElementById("password").value;
    
    if (nome === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
    } else {
        alert("Login efetuado com sucesso!");
        return true;
    }
}