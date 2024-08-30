function enviar(){
    var clima = document.querySelector('input[name="clima"]:checked').value
    var res = document.getElementById('res') 

    switch (clima) {
        case 'sol':
        res.innerHTML = 'O clima está ensolarado.<br> Que tal ir para uma praia ou cachoeira?'
        break;

        case 'chuva':
        res.innerHTML = 'O dia está chuvoso. <br> Melhor ficar embaixo das cobertas mesmo!'
        break;

        case 'nublado':
        res.innerHTML = 'Dia nublado? Ótimo para caminhar!'
        break;

        default:
            res.innerHTML = 'Selecione um clima'
            break;
    } 
}