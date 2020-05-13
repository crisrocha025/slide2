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
window.load = slide(0)
var numItem = 0;
  function slide(n){
  itensDom[n].style = 'z-index:9;'
  }
  function anterior(){
   if(numItem<5){
	slide(numItem)
	numItem++
   }
  }
function proximo(){
  if(numItem>0){
	slide(numItem)
	numItem++
  }
  }
