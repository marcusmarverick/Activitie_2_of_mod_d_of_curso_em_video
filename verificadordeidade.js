function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }
    else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && < 10){ 
            //Criança
            img.setAttribute('sec, foto-bebe-m.png')
       } else if (idade < 21){
        //Jovem 
        img.setAttribute('sec, foto-jovem-m.png')
       } else if (idade < 50) {
        //Adulto 
        img.setAttribute('sec, foto-adulto-m.png')
       }  else {
        //Idoso
        img.setAttribute('sec, foto-idoso-m.png')
       }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && < 10){ //Criança
            img.setAttribute('sec, foto-bebe-f.png')
       }  else if (idade < 21){
        //Jovem 
        img.setAttribute('sec, foto-jovem-f.png')
       } else if (idade < 50) {
        //Adulta
        img.setAttribute('sec, foto-adulta-m.png')
       }  else {
        //Idosa
        img.setAttribute('sec, foto-idosa-m.png')
       }
    }
       res.style.textAlign='center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)       
    }
}