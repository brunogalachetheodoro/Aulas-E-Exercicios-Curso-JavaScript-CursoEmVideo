function contar() {
    let inicio = document.getElementById('ninicio')
    let fim = document.getElementById('nfim')
    let passo = document.getElementById('npasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[Erro] Faltam Dados') 
    } else {
        res.innerHTML = 'Contando:<br>'
   

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p = 0) {
        window.alert("Passo inválido. Considerando passo 1")
        p = 1
    }

    if (i < f) {
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` \u{1F449}${c}`
        }
    } else {
        for (let c = i; c >= f; c-= p) {
            res.innerHTML += ` \u{1F449}${c}`
        }
    }

    res.innerHTML += '\u{1F3C1}' 


    }

}