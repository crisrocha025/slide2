//Criado por: Cris Rocha
//Site: O código Cris
//Url: www.ocodigocris.com
var itens=[]
	var num
    for(num=1;num < 6;num++){
      var recebedor = '.itensPosts:nth-child('+num+')'
	  itens.push(recebedor)
    }
var itensDom = []
var cont
for(cont=0;cont<5;cont++){
var doc = document.querySelector(itens[cont])
itensDom.push(doc)
}
var optUm = document.querySelector('.optUm')
var optDois = document.querySelector('.optDois')
var optTres = document.querySelector('.optTres')
var optQuatro = document.querySelector('.optQuatro')
var optCinco = document.querySelector('.optCinco')
var altera = [optUm,optDois,optTres,optQuatro,optCinco]
function circleUm(){
altera[0].style.background = '#f7406e'
altera[1].style.background = '#36453b'
altera[2].style.background = '#36453b'
altera[3].style.background = '#36453b'
altera[4].style.background = '#36453b'
itensDom[0].style = 'z-index:9;'
itensDom[1].style = 'z-index:1;'
itensDom[2].style = 'z-index:1;'
itensDom[3].style = 'z-index:1;'
itensDom[4].style = 'z-index:1;'
}
function circleDois(){
altera[1].style.background = '#f7406e'
altera[0].style.background = '#36453b'
altera[2].style.background = '#36453b'
altera[3].style.background = '#36453b'
altera[4].style.background = '#36453b'
itensDom[1].style = 'z-index:9;'
itensDom[0].style = 'z-index:1;'
itensDom[2].style = 'z-index:1;'
itensDom[3].style = 'z-index:1;'
itensDom[4].style = 'z-index:1;'
}
function circleTres(){
altera[2].style.background = '#f7406e'
altera[1].style.background = '#36453b'
altera[0].style.background = '#36453b'
altera[3].style.background = '#36453b'
altera[4].style.background = '#36453b'
itensDom[2].style = 'z-index:9;'
itensDom[0].style = 'z-index:1;'
itensDom[1].style = 'z-index:1;'
itensDom[3].style = 'z-index:1;'
itensDom[4].style = 'z-index:1;'
}
function circleQuatro(){
altera[3].style.background = '#f7406e'
altera[1].style.background = '#36453b'
altera[2].style.background = '#36453b'
altera[0].style.background = '#36453b'
altera[4].style.background = '#36453b'
itensDom[3].style = 'z-index:9;'
itensDom[0].style = 'z-index:1;'
itensDom[1].style = 'z-index:1;'
itensDom[2].style = 'z-index:1;'
itensDom[4].style = 'z-index:1;'
}
function circleCinco(){
altera[4].style.background = '#f7406e'
altera[1].style.background = '#36453b'
altera[2].style.background = '#36453b'
altera[3].style.background = '#36453b'
altera[0].style.background = '#36453b'
itensDom[4].style = 'z-index:9;'
itensDom[0].style = 'z-index:1;'
itensDom[1].style = 'z-index:1;'
itensDom[3].style = 'z-index:1;'
itensDom[0].style = 'z-index:1;'
}
