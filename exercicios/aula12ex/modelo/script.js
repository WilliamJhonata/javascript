function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#f5d47a'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#cf6527'
    } else {
        img.src = 'fotonoite.jpg'
        document.style.background = '#40444b'
    }
}