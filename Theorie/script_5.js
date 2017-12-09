
var el_3 = document.getElementById('hallo-block');
//alert(el_3);

function changeCurrent(element){
	if(element != 'Fick dich ins Knee111!!!'){
		element.innerHTML = 'Fick dich ins Knee111!!!';
		}
		else{
			element.innerHTML = 'Halloechen Suesse111';
			//alert("Halloechen Suesse111");
		}
	}

//Ф-я добавляющая элементы ссылок:
function test(){
	var element = document.getElementById('block-1');
	var link = document.createElement('a');
	var br = document.createElement('br');
	
	link.innerHTML= 'Go to Google';
	link.href = 'https://www.google.com.ua/';
	
	element.appendChild(br);
	element.appendChild(link);

}


//Ф-я удаляющая элементы:
function test_rem(){
	var element = document.getElementById('block-1');
	document.body.removeChild(element);

}

