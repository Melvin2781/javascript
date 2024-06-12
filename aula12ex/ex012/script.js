function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ibirthday')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.src = 'imagens/menino.png'
            }  else if (idade < 21) {
                img.src = 'imagens/moleque.png'
            } else if (idade < 50) {
                img.src = 'imagens/adulto.png'
            } else {
                img.src = 'imagens/idoso.png'
            }
        } else {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.src = 'imagens/menina.png'
            }  else if (idade < 21) {
                img.src = 'imagens/jovem.png    '
            } else if (idade < 50) {
                img.src = 'imagens/adulta.png'
            } else {
                img.src = 'imagens/idosa.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}