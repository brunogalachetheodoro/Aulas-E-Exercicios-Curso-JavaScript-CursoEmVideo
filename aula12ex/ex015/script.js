function verificar () {
    var anoNasc = document.getElementById('nasc')
    var agora = new Date ()
    var anoAtual = agora.getFullYear()
    var idade = anoAtual - anoNasc

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
       window.alert ('[erro] Verifique seus dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        window.alert (`idade ${idade}`)
    }

    //


}