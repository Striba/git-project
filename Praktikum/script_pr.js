
function fun1(){
var chbox = document.getElementById('one');

if(chbox.checked){
	
	alert('Choosen');
	}
	else
	{
	alert('Not Choosen');
	}
	
}

function fun2(){
var radi = document.getElementsByName('r1');
var empty = true;
for(var i=0; i<radi.length; i++){
	if(radi[i].checked){
		empty = false;
		alert('Choosen: ' + i + ' element');
		}
	}
	if(empty == true){
		alert('Nothing is been chosen!');
		}
}

//Ф-я выводит выбранный элемент оптиона.
function fun3(){
	var sel = document.getElementById('mySelect').selectedIndex;//Выбирает индекс заданного элемента
	var options = document.getElementById('mySelect').options;//Выбирает содержимое отприона заданного элемента
	alert('Выбрана опция : ' + options[sel].text);//Выводит текст отпитона заданного элемента
}







