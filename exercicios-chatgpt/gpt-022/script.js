function enviar() {
    var diaS = document.getElementById('diaS').value
    var res = document.getElementById('res')
    switch (diaS) {
        case '1':
        res.innerHTML = 'Dia Selecionado: Segunda-Feira'
        break;

        case '2':
        res.innerHTML = 'Dia Selecionado: Terça-Feira'
        break;

        case '3':
        res.innerHTML = 'Dia Selecionado: Quarta-Feira'
        break;

        case '4':
        res.innerHTML = 'Dia Selecionado: Quinta- Feira'
        break;

        case'5':
        res.innerHTML = 'Dia Selecionado: Sexta-Feira'
        break;

        case '6':
        res.innerHTML = 'Dia Selecionado: Sábado'
        break;

        case '7': 
        res.innerHTML = 'Dia Selecionado: Domingo'
        break;

        default:
        res.innerHTML = 'Dia Não Encontrado'
    }

}