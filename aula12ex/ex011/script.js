function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#E5DFCD';
        img.src = 'imagens/manha.png'
    } else if (hora < 18) {
        document.body.style.background = '#D85A1C';
        img.src = 'imagens/tarde.png'
    } else {
        document.body.style.background = '#022962';
        img.src = 'imagens/noite.png'
    }

}
