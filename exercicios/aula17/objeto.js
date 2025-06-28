let amigo = {nome:'Jose', 
    sexo: 'M', 
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`O nome do meu amigo é ${amigo.nome}, seu sexo é ${amigo.sexo}, ele pesa ${amigo.peso}`)
