
////Основные способы доступа к объектам элемнта вебдокумента:
////Для получения доступа к элементу по айди, нужно воспользоваться методом getElementById('идентификатор нашего элемента'):
//var element = document.getElementById('footer');
//console.log(element);
////var element1 = document.getElementById('footer');
////console.log(element1);
//
//
////Получение доступа к элементу по названию ТЭГа:
//var divs = document.getElementsByTagName('div');
////Получение доступа к элементу по названию Class:
//var links = document.getElementsByClassName('my-link');	
////Выводим полученные значения в консоль:
//console.log('collection of TAG name: ' + divs);
//console.log('collection of CLASS name: ' + links);


var el_1 = document.getElementById('some-block');
var el_2 = document.getelementByTagName('div');

function changeSingle(element){
	element.innerHTML = "Hoere mal mich aufmerksam ZUUUUU!!!!:-)";
	}
	
function changeCollection(elements){
	for(var i = 0; i < elements.length; i++){
		elements[i].innerHTML = "Bin nun geaenderet!!!";
		}
	}