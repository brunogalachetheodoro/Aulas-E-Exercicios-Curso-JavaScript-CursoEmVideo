function gerar() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    let tabuada

    

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let numero = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while ( c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
    
}