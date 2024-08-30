function enviar () {
    var idade = document.getElementById('idade').value
    var res = document.getElementById('res')

    if (idade < 18) {
        res.innerHTML = 'Você é menor de idade'
    } else {
        res.innerHTML = 'Você é maior de idade'
    }
}