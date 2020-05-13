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
function anterior(){
if(itensDom[0].style=='z-index:5;'){	
  itensDom[4].style='z-index:9;'
  itensDom[0].style='z-index:1;'
}
else if(itensDom[4].style=='z-index:9;'){	
  itensDom[3].style='z-index:8;'
  itensDom[4].style='z-index:1;'
}
else if(itensDom[3].style=='z-index:9;'){	
  itensDom[2].style='z-index:7;'
  itensDom[3].style='z-index:1;'
}
else if(itensDom[2].style=='z-index:9;'){	
  itensDom[1].style='z-index:6;'
  itensDom[2].style='z-index:1;'
}
else{	
  itensDom[0].style='z-index:5;'
  itensDom[1].style='z-index:1;'
}
}
