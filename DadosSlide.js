//Criado por: Cris Rocha
//Site: O código Cris
//Url: www.ocodigocris.com
var itens=[]
	var num
    for(num=1;num < 7;num++){
      var recebedor = '.itensPosts:nth-child('+num+')'
	  itens.push(recebedor)
    }
var itensDom = []
for(cont=1;cont<6;cont++){
var doc = document.querySelector(itens[cont])
itensDom.push(doc)
}

var p
var tmp
var maxPost
var postAtual
function mostraPost(atual){
itensDom[atual].style ='z-index:7;opacity:1;'
if(atual!=0){
itensDom[0].style ='z-index:1;opacity:0;'
}
if(atual!=1){
itensDom[1].style ='z-index:1;opacity:0;'
}
if(atual!=2){
itensDom[2].style ='z-index:1;opacity:0;'
}
if(atual!=3){
itensDom[3].style ='z-index:1;opacity:0;'
}
if(atual!=4){
itensDom[4].style ='z-index:1;opacity:0;'
}
}

function iniciaSlide(){
    maxPost=itensDom.length -1
    postAtual=1
    tmp=0
    anima()
}
function alteraPost(val){
    postAtual+=val
    if(postAtual > maxPost){
        postAtual = 0
    }else if(postAtual < 0){
            postAtual=maxPost
    }
    mostraPost(postAtual)
}
function anima(){
    tmp++
    if(tmp>=200){
        tmp=0;
        alteraPost(1)
    }
    window.requestAnimationFrame(anima)
}
document.addEventListener('load',iniciaSlide());
