function validarForm() {
    var nome = document.getElementById("name").value;
    var senha = document.getElementById("password").value;
    
    if (nome === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
    } else {
        var senha = document.getElementById("password").value;
        var senha2 = document.getElementById("password2").value;
        
        if (senha !== senha2) {
            alert("As senhas não conferem!");
            return false;
        } else {
            alert("Cadastro efetuado com sucesso!");
            return true;
        }
    }

        
}