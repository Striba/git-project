


var el_1 = document.getElementById('some-block');
var el_2 = document.getElementsByTagName('div');
//console.log(el_2);



function changeSingle(element){
	element.innerHTML = "Hoere mal mich aufmerksam ZUUUUU!!!!:-)";
	}
	
function changeCollection(elements){
	for(var i = 0; i < elements.length; i++){
		elements[i].innerHTML = "Bin nun geaenderet!!!";
		}
	}
	
	var el_3 = document.getElementById('hallo-block');
	alert(el_3);
	
	function changeCurrent(element){
		if(element != 'Fick dich ins Knee111!!!'){
			element.innerHTML = 'Fick dich ins Knee111!!!';
			}else{
				element.innerHTML = 'Halloechen Suesse111';
			}
		}

//пример изменения одного из св-в объекта DOM:	
var elik = document.getElementById('test-link');
elik.href = 'https://www.yandex.ua/';

elik.style.color = 'red';
elik.style.background = 'blue';
elik.style.fontFamily = 'Arial';