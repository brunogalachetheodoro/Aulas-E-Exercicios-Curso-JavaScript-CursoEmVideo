function enviar () {
    var mes = document.querySelector('#nMes').value

    switch (mes) {
        case '1':
        res.innerHTML = 'O mês selecionado foi Janeiro';
        break;

        case '2':
        res.innerHTML = 'O mês selecionado foi Fevereiro';
        break;

        case '3':
        res.innerHTML = 'o mês selecionado foi Março';
        break
        
        case '4':
        res.innerHTML = 'O mês selecionado foi Abril';
        break;

        case '5':
        res.innerHTML = 'O mês selecionado foi Maio';
        break;

        case '6':
        res.innerHTML = 'o mês selecionado foi Junho';
        break

        case '7':
        res.innerHTML = 'O mês selecionado foi Julho';
        break;

        case '8':
        res.innerHTML = 'O mês selecionado foi Agosto';
        break;

        case '9':
        res.innerHTML = 'o mês selecionado foi Setembro';
        break

        case '10':
        res.innerHTML = 'O mês selecionado foi Outubro';
        break;

        case '11':
        res.innerHTML = 'O mês selecionado foi Novembro';
        break;

        case '12':
        res.innerHTML = 'o mês selecionado foi Dezembro';
        break

        default:
        res.innerHTML = 'Mês não encontrado. Tente Novamente';
        break
    }

}