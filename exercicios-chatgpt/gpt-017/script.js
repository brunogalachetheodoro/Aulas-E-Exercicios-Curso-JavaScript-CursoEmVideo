function enviar () {
    var numero = document.getElementById('numero').value

    if (numero % 2 == 0) {
        res.innerHTML = `Você digitou o número ${numero} e ele é par`
    } else {
        res.innerHTML = `Você digitou o número ${numero} e ele é impar`
    }
}