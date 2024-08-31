function contar() {
    var inicio = document.getElementById('ninicio').value
    var fim = document.getElementById('nfim').value
    var passo = document.getElementById('npasso').value
    var res = document.getElementById('res').value

    while (fim <= inicio) {
        res.innerHTML = `👉 ${inicio}`
        inicio = inicio + passo
    }
}