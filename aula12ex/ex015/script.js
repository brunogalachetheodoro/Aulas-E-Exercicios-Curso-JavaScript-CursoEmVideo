function verificar () {
    var data = new Date ()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('nasc')
    var res = document.getElementById('res')

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual || anoNasc.value < 1908) {
       window.alert ('[erro] Verifique seus dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - anoNasc.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // criou um atributo id='foto'

        if (sexo[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/homem-crianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/homem-adolescente.png')
            }  else if (idade < 30) {
                img.setAttribute('src', 'imagens/homem-jovem-adulto.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/mulher-adolescente.png')
            }  else if (idade < 30) {
                img.setAttribute('src', 'imagens/mulher-jovem-adulto.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/mulher-idoso.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

    //


}