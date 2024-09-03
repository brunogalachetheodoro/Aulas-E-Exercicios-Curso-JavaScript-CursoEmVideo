function adicionar () {
    let num = document.getElementById('ntxt')

    let numInserido = [Number(num.value)]



    if ((num.value.length == 0) || (numInserido <= 0 || numInserido > 100)) {
            window.alert ('Valor inválido')
    } else {
            let res = document.getElementById('res')
            res.innerHTML += `Valor ${numInserido} adicionado <br>`
    }
}
