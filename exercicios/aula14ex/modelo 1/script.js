function contar() {
    var n1 = document.getElementById('ini')
    var n2 = document.getElementById('fim')
    var n3 = document.getElementById('passo')
    var res = document.getElementById('res')
    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        window.alert('[ERRO] digite um número!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)

        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){
        for( let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
        } else{
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}