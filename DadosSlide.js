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
var ant = document.querySelector('.ant')
var prox = document.querySelector('.prox')

itensDom.style.backgroundImage= 'url('<data:blog.postImageUrl/>')'
