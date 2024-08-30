function enviar() {
    var nota = document.querySelector('#nota').value
    var res = document.querySelector('#res')

    if (nota > 100) {
        res.innerHTML = 'O número inserido não é válido, por vafor, insira outro número'
    } else if (nota >= 90) {
        res.innerHTML = 'Nota: A'
    } else if (nota >= 80) {
        res.innerHTML = 'Nota: B'
    } else if (nota >= 70) {
        res.innerHTML = 'Nota: C'
    } else if (nota >= 60 ) {
        res.innerHTML = 'Nota: D'
    } else {
        res.innerHTML = 'Nota: F'
    }
}