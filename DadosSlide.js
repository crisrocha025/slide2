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
window.load = slider(0)

var itemNum = 0;

function slider(n){
	var allLi = 4;
  itensDom[n].style ='z-index:9;'
}
  function anterior(){
    if(itemNum<4){
		itemNum++
		slider(itemNum)
    }
   
  }
